import { Router } from "express";
import Search from "../../core/user/service/search";


export default class SeachController {
  constructor(
    readonly server: Router,
    readonly casoDeUso: Search
  ) {
    server.get('/user/:email', async ({ params }, res) => {
      const email = params.email

      const user = await casoDeUso.executar(email)
      return res.send(user)
    })
  }
}