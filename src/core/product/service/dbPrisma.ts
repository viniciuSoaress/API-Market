import Product from "../model/product";

export default interface DbPrisma {
  create(dados: Product): Promise<void>,
  get():Promise<Product[]>,
  delete(id: string): Promise<void | Product>
}