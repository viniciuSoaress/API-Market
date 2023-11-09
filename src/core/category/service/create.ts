import CasoDeUso from "../../shared/casoDeUso";
import DbPrismaC from "./dbPrismaC";

type Entrada = {
  name: string
}

export default class Create implements CasoDeUso<Entrada, void>{

  constructor(readonly dbPrismaC: DbPrismaC) { }

  async executar(entrada: Entrada): Promise<void> {
    const { name } = entrada

    try {
      await this.dbPrismaC.create({ name })
      
    } catch (error) {
      console.error(error)
    }
  }

}