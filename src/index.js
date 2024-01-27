//require('dotenv').config({path: './env'})
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path : './env'
})

connectDB();


// /*
// ( async () => {
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`) 
//        app.on("error", (error) => {
//         console.log("ERROR", error)
//         throw error
//        })
//        app.listen(process.env.PORT, () => {
//         console.log("application is listing on port", process.env.PORT)
//        })
//     }catch(error) {
//         console.log(error)
//     }
// })()
// */

// import mongoose from "mongoose";
// import dotenv from 'dotenv';
// import { DB_NAME } from "./constants.js";
// const mongoDbUrl = `${process.env.MONGODB_URI}/${DB_NAME}`;
// mongoose.connect(mongoDbUrl);

// //Get the default connection
// const db = mongoose.connection;

// //Bind connection to error event (to get notification of connection errors)

// db.on('connected', function(){
//     console.log("Mongoose default connection is open to ", mongoDbUrl);
//  });