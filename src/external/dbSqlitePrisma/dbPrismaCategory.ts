import Category from '../../core/category/model/category';
import DbPrismaC from '../../core/category/service/dbPrismaC';
import { prisma } from '../prisma'


export default class DbPrismaCategory implements DbPrismaC {

  readonly dbPrisma = prisma

  async create(dados: Category): Promise<Category | null> {
   
    await this.dbPrisma.category.create({
      data: dados
    })
    return null
  }

  async get(): Promise<Category[]> {
    return await this.dbPrisma.category.findMany()
  }

}