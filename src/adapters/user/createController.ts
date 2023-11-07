import { Router } from "express";
import Create from "../../core/user/service/create";
import { z } from "zod";

const Schema = z.object({
  name: z.string().min(3),
  email: z.string().email()
})

export default class CreateController {

  constructor(
    readonly server: Router,
    readonly casoDeUso: Create
  ) {
    server.post('/user', async ({ body }, res) => {

      const validateUSer = Schema.safeParse(body)

      if (!validateUSer.success) {
        return res.json({ message: 'dados ivalidos' }).end()
      }
      const dados = validateUSer.data

      const newUser = await casoDeUso.executar(dados)
      res.json(newUser)
    })
  }
}