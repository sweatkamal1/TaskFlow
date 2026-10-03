import mysql, { Connection } from "mysql2/promise";

 const connetDB = mysql.createPool({
    host:"localhost",
    user:'root',
    password:"Gurudev@123",
    database:"task_flow",
    // waitForConnections:"true",
    // connectionLimit:10
})

export default connetDB;