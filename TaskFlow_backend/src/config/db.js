// import mysql, { Connection } from "mysql2/promise";

//  const connetDB = mysql.createPool({
//     host:"localhost",
//     user:'root',
//     password:"Gurudev@123",
//     database:"task_flow",
//     // waitForConnections:"true",
//     // connectionLimit:10
// })

// export default connetDB;



import mysql from "mysql2/promise";
import "dotenv/config";

const connetDB = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

export default connetDB;