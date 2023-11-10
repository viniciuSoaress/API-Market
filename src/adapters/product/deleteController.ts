import { Router } from "express";
import Delete from "../../core/product/service/delete";


export default class DeleteController {

  constructor(
    readonly server: Router,
    readonly casoDeUso: Delete
  ) {
    server.delete('/product/:id', async ({ params }) => {
      const id = params.id

      await casoDeUso.executar(id)
    })
  }
}