import express from 'express';
import bodyParser from 'body-parser';
import {dbConnection} from "./src/dbconfig.js/config.js"
import {router} from "./src/routes/employeeRoute.js"

let app = express()

app.use(bodyParser.json())

app.use("/",router)

let hostName = "127.0.0.1"
let port = 8000
app.listen(port, hostName, ()=>{
    console.log(`http://${hostName}:${port}/`);
    
})

let mongoUrl = "mongodb://localhost:27017/employees"
dbConnection(mongoUrl)

export default app;