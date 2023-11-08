import { Router } from "express";
import Create from "../../core/category/service/create";

import { z } from "zod";

const Schema = z.object({ name: z.string() })


export default class CreateController {

  constructor(
    readonly server: Router,
    readonly casoDeUSo: Create
  ) {
    server.post('/category', async ({ body }, res) => {
      

      const valide = Schema.safeParse(body)
      if (!valide.success) {
        res.json({ error: 'error' })
      }
      

      await casoDeUSo.executar({name: 'name'})


    })
  }
}