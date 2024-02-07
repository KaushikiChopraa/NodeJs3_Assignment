import mongoose from "mongoose";

let db = mongoose.connect("mongodb://127.0.0.1:27017/employees")
.then(console.log("Mongodb connection eastablished"))
.catch((error)=>console.log("error in establishing the connection",error))

export default db

