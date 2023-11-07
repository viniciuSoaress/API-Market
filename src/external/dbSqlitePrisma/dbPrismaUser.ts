import User from "../../core/user/model/User";
import dbPrisma from "../../core/user/service/dbPrisma";
import { prisma } from "../prisma";

export default class DbPrismaUser implements dbPrisma {

  readonly prismadb = prisma



  async searchByEmail(email: string): Promise<User | null> {
    return await this.prismadb.user.findUnique({
      where: { email }
    }) ?? null
  }


  async create(dados: User): Promise<User> {
    return await this.prismadb.user.create({
      data: dados
    })
  }

} 