import { Router } from "express";
import Get from "../../core/category/service/get";

export default class GetController {

  constructor(
    readonly server: Router,
    readonly casoDeUso: Get
  ){
    server.get('/category', async (req, res) => {
      res.send(await casoDeUso.executar())
    })
  }
}