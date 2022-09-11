import express, {Request, Response, NextFunction} from 'express'
const app = express()

app.get('/', (req:Request,res:Response, next:NextFunction)=>{
    console.log("hello World");
})

app.listen('8000', ()=>console.log('Server satarted now'))