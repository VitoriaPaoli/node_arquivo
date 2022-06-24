import express, {Request, Response} from 'express'
import {Server} from 'http'

//usando express
const server = express()

server.get('/',(req:Request,res:Response) =>{

    res.send("Amor por favor nao desligu o telefone, eu sou sua mulher e vc e o meu homem")
}) 

//escutando a porta 80
server.listen(80)
