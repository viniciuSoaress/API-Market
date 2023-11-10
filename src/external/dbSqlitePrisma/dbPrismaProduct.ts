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


  async get(email: string): Promise<Product[]> {
    return await this.dbPrisma.product.findMany({
      where: {
        user: {
          email
        }
      },
      take: 6
    })
  }


  async delete(id: string): Promise<void | Product> {
    return await this.dbPrisma.product.delete({
      where: { id }
    })
  }

  async put(id: string, newData: Product): Promise<void> {
    await this.dbPrisma.product.update({
      where: { id },
      data: newData
    })
  }


}