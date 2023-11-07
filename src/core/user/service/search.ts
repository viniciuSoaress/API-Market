import CasoDeUso from "../../shared/casoDeUso";
import User from "../model/User";
import dbPrisma from "./dbPrisma";

export default class Search implements CasoDeUso<string, User | null >{

  constructor(readonly dbPrisma: dbPrisma){}

  async executar(entrada: string): Promise<User | null> {
    return await this.dbPrisma.searchByEmail(entrada)
  }
 
  
}