import { Router } from "express";
import Create from "../core/product/service/create";
import DbPrismaProduct from "../external/dbSqlitePrisma/dbPrismaProduct";
import CreateController from "../adapters/product/createController";
import Get from "../core/product/service/get";
import GetController from "../adapters/product/getController";
import Delete from "../core/product/service/delete";
import DeleteController from "../adapters/product/deleteController";
import Put from "../core/product/service/put";
import PutController from "../adapters/product/putController";

const productRouter = Router()

const dbPrisma = new DbPrismaProduct()

const create = new Create(dbPrisma)
new CreateController(productRouter, create)

const get = new Get(dbPrisma)
new GetController(productRouter, get)

const delet = new Delete(dbPrisma)
new DeleteController(productRouter, delet)

const put = new Put(dbPrisma)
new PutController(productRouter, put)

export { productRouter }