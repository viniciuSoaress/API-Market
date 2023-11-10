import { Router } from "express";
import Get from "../../core/product/service/get";


export default class GetController {
  constructor(
    readonly server: Router,
    readonly casoDeUso: Get
  ){
    server.get('/product/:email', async ({params}, res) => {
      const email = params.email

      res.send(await casoDeUso.executar(email))

    })
  }
}