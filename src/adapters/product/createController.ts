import { Router } from "express";
import Create from "../../core/product/service/create";
import {z} from 'zod'


const Schema = z.object({
  name: z.string(),
  preco: z.number(),
  categoyId: z.string(),
  userId: z.string()
})

export default class CreateController {

  constructor(
    readonly server: Router,
    readonly casoDeUso: Create
  ){
    server.post('/product', async ({body}, res) => {
      const valide = Schema.safeParse(body)
      
      if(!valide.success){
        return res.json({message: 'error ao criar produtor'})
      }

      await casoDeUso.executar(valide.data)
      res.end()

    })
  }
}