import { Router } from "express";
import Create from "../core/category/service/create";
import DbPrismaCategory from "../external/dbSqlitePrisma/dbPrismaCategory";
import CreateController from "../adapters/categoty/createController";
import Get from "../core/category/service/get";
import GetController from "../adapters/categoty/getController";


const categoryRouter = Router()

const dbPrismaC = new DbPrismaCategory()

const create = new Create(dbPrismaC)
new CreateController(categoryRouter, create)

const get = new Get(dbPrismaC)
new GetController(categoryRouter, get)


export { categoryRouter }