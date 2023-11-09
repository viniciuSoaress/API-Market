import { Router } from "express";
import Create from "../core/product/service/create";
import DbPrismaProduct from "../external/dbSqlitePrisma/dbPrismaProduct";
import CreateController from "../adapters/product/createController";

const productRouter = Router()

const dbPrisma = new DbPrismaProduct()

const create = new Create(dbPrisma)
new CreateController(productRouter, create)


export { productRouter }