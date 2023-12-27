import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"


const app = express()
express(app)

app.use({
    origin: `${process.env.CORS_ORIGIN}`
})

app.use(express.json({limit:'20kb'}))  //json requests limits
app.use(express.urlencoded({extended:true,limit:'20kb'}))
app.use(express.static('public'))  //url request encoding defaults to JSON encoding
app.use(cookieParser())
export {app}