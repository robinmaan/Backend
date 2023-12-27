// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config({
    path:'.env'
})

connectDB()
.then(()=>{
    app.listen(`${process.env.PORT}`,()=>{
        console.log("connted Successfully ");
    })
    app.on("error",(err)=>{
        console.log("Error in Connection:",err);
        throw err
    })
})
.catch((err)=>{
    console.log("Error:",err);
})


















// const app = require('express')

// // iffis
// ( async ()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//        app.on("error",()=>{
//             console.log("Express is shown some:",err);
//             throw err;
//        })

//        app.listen(`$process.env.PORT`,()=>{
//         console.log("App is listening");
//        })
//     } catch (error) {
//         console.error("Error: ",error)
//         throw err
//     }

// })()