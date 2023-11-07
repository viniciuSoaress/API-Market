import { Router } from "express";
import Create from "../core/user/service/create";
import DbPrismaUser from "../external/dbSqlitePrisma/dbPrismaUser";
import CreateController from "../adapters/user/createController";
import Search from "../core/user/service/search";
import SeachController from "../adapters/user/searchController";



const userRouter = Router()
const dbPrisma = new DbPrismaUser()

const create = new Create(dbPrisma)
new CreateController(userRouter, create)

const search = new Search(dbPrisma)
new SeachController(userRouter, search)


userRouter.get('/user', async (req,res) => {
  res.send('user router')
})


export { userRouter }