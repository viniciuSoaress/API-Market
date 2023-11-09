import express from 'express'
import cors from 'cors'


import { userRouter } from './routes/user'
import { categoryRouter } from './routes/category'
import { productRouter } from './routes/product'

const server = express()

server.use(cors())
server.use(express.json())

server.use(userRouter)
server.use(categoryRouter)
server.use(productRouter)




server.listen(8182, () => {
  console.log('api rodando')
})