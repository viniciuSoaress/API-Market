import express from 'express'
import cors from 'cors'


import { userRouter } from './routes/user'

const server = express()

server.use(cors())
server.use(express.json())

server.use(userRouter)




server.listen(8182, () => {
  console.log('api rodando')
})