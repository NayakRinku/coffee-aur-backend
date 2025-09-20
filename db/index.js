import mongoose, { mongo } from 'mongoose';

import { DB_NAME } from "../source/constant.js";

const connectDB= async ()=>{

    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n  mongoose connected !! DB HOST:${connectionInstance.connection.host}`)
    }catch(error){
        console.log("error",error)
        process.exit(1);
    }
}
export default connectDB;