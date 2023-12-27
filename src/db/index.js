import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";


const connectDB = async ()=>{
    try {
        const db = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n Mongo Db Connection or DB Host
         ${db.connection.host}`);
    } catch (error) {
        console.log("Mongo Db Failed:",error);
        throw err
        process.exit(1)
    }
    
}
export default connectDB