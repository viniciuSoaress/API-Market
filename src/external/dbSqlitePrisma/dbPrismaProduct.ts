import Product from '../../core/product/model/product';
import DbPrisma from '../../core/product/service/dbPrisma';
import { prisma } from '../prisma'


export default class DbPrismaProduct implements DbPrisma {

  readonly dbPrisma = prisma


  async create(dados: Product): Promise<void> {

    await this.dbPrisma.product.create({
      data: dados
    })
  }


  async get(): Promise<Product[]> {
    return await this.dbPrisma.product.findMany()
  }

  
  async delete(id: string): Promise<void | Product> {
    return await this.dbPrisma.product.delete({
      where: { id }
    })
  }
}