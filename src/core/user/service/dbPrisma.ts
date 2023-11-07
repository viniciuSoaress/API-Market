import User from "../model/User";

export default interface dbPrisma {
  searchByEmail(email: string): Promise<User | null>
  create(dados: User): Promise<User>
}