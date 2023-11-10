import Product from "../model/product";

export default interface DbPrisma {
  create(dados: Product): Promise<void>,
  get(email: string):Promise<Product[]>,
  delete(id: string): Promise<void | Product>,
  put(id: string, newData: Product): Promise<void>
}