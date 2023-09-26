import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import errorHandler from '../Middlewares/errorHandler.js'
import newsRouter from '../Routes/newsRouter.js'
import userRouter from '../Routes/user.js'
import sessionRouter from '../Routes/session.js'
import roleRouter from '../Routes/role.js'
//

class AppExpress
{
    constructor()
    {
        
    }
    init()
    {
        this.app = express()
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:true}))
        this.app.use(cors({credentials:true,
            origin: 'https://proyect-web-cbsn.vercel.app'}))
        this.app.use(cookieParser())
    }

    build()
    {
        this.app.use('/api/news', newsRouter);
        this.app.use('/api/users', userRouter);
        this.app.use('/api/session', sessionRouter);
        this.app.use('/api/roles', roleRouter);
        this.app.use(errorHandler)
    }

    listen()
    {
        this.app.listen(process.env.PORT,()=>{
            console.log(`escuchando en puerto ${process.env.PORT}`)})
    }

}
export default AppExpress