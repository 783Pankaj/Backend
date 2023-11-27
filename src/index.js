// import mongoose from "mongoose";
// import {BD_NAME, DB_NAME} from './constants'
// import express from "express"

/* First approche
const app =express()
( async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR_not taking to DataBase:", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("ERROR: ", error)
        throw err
    }
})()

*/

// require('dotenv').config()
import dotenv from 'dotenv'
// second aproch

import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config({
    path: './.env'
})
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is runnig at port: ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("MONGO db connection failed !!!", err)
    })