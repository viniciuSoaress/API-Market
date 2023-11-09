import { Router } from "express";
import Create from "../../core/category/service/create";

import { z } from "zod";

const Schema = z.object({ name: z.string().min(4) })


export default class CreateController {

  constructor(
    readonly server: Router,
    readonly casoDeUSo: Create
  ) {
    server.post('/category', async ({ body }, res) => {

      const valide = Schema.safeParse(body)

      if (!valide.success) {
        return res.json({ error: 'error ao criar cat' })
      }

     const category = await casoDeUSo.executar(valide.data)
      return res.status(201).json(category)

    })
  }
}