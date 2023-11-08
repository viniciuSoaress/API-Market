import Category from "../model/category";

export default interface DbPrismaC {
  create(entrada: Category): Promise<Category | null>,
  get(): Promise<Category[]>
}