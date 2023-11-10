import CasoDeUso from "../../shared/casoDeUso";
import Product from "../model/product";
import DbPrisma from "./dbPrisma";

type Entrada = {
  id: string,
  newData: Product
}

export default class Put implements CasoDeUso<Entrada, void>{

  constructor(readonly dbPrisma: DbPrisma) { }

  async executar(entrada: Entrada): Promise<void> {

    const { id, newData } = entrada

    // console.log(newData)
    console.log(id)

    try{
      await this.dbPrisma.put(id, newData)
    }catch(error){
      console.error(error)
    }
  }

}