import CasoDeUso from "../../shared/casoDeUso";
import Category from "../model/category";
import DbPrismaC from "./dbPrismaC";

export default class Get implements CasoDeUso<void, Category[]>{

  constructor(readonly dbPrisma: DbPrismaC){}

  async executar(): Promise<Category[]> {
    return await this.dbPrisma.get()
  }
  
}