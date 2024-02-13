import mongoose from "mongoose";


export function dbConnection(url){

let db = mongoose.connect(url)
.then(console.log("Mongodb connection eastablished"))
.catch((error)=>console.log("error in establishing the connection",error))

}


