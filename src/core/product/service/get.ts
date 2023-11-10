import CasoDeUso from "../../shared/casoDeUso";
import Product from "../model/product";
import DbPrisma from "./dbPrisma";

export default class Get implements CasoDeUso<string, Product[]>{

  constructor(readonly dbPrisma: DbPrisma) { }


  async executar(entrada: string): Promise<Product[]> {
    const products = await this.dbPrisma.get(entrada)
    try {
      if (!products) {
        throw new Error('error no servidor')
      }
    } catch (error) {
      console.error(error)
    }

    return products
  }

}