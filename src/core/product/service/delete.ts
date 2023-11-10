import CasoDeUso from "../../shared/casoDeUso";
import Product from "../model/product";
import DbPrisma from "./dbPrisma";

export default class Delete implements CasoDeUso<string, Product |void>{
  
  constructor(readonly dbPrisma: DbPrisma){}
  
  async executar(entrada: string): Promise<void | Product> {
    return await this.dbPrisma.delete(entrada) 
  }
}