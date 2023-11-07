import CasoDeUso from "../../shared/casoDeUso";
import dbPrisma from "./dbPrisma";




type Entrada = {
  name: string,
  email: string
}

export default class Create implements CasoDeUso<Entrada, void | { message: string }>{

  constructor(readonly dbPrisma: dbPrisma) { }

  async executar(entrada: Entrada): Promise<void | { message: string }> {
    const { email, name } = entrada

    const existUser = await this.dbPrisma.searchByEmail(email)
    try {
      if (existUser) {
        return { message: 'emeil de usuario ja esta em uso!' }
      }
      await this.dbPrisma.create({ name, email })
    } catch (error) {
      console.error(error)
    }
  }

}