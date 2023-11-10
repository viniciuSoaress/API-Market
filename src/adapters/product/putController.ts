import { Router } from "express";
import Put from "../../core/product/service/put";
import Product from "../../core/product/model/product";


export default class PutController {
  constructor(
    readonly server: Router,
    readonly casoDeUso: Put
  ) {
    server.put('/product/:id', async (req, res) => {

      const id = req.params.id
      const newData = req.body as Product

      await casoDeUso.executar({id, newData})

      res.end()
    })
  }
}