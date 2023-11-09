import CasoDeUso from "../../shared/casoDeUso";
import DbPrisma from "./dbPrisma";

type Entrada = {
  name: string,
  preco: number,
  userId: string,
  categoyId: string
}

export default class Create implements CasoDeUso<Entrada, void>{

  constructor(readonly dbPrisma: DbPrisma) { }

  async executar(entrada: Entrada): Promise<void> {

    const { categoyId, name, preco, userId } = entrada
    
    try {
      await this.dbPrisma.create({ name, preco, userId, categoyId })
    } catch (error) {
      console.error(error)
    }
  }

}