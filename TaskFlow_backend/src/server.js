import express from "express"
import connetDB from "./config/db.js"

const app = express();

const PORT = 3000


// app.get("/" ,(req , res) =>{
//     res.send({message:"our revesion in start now"})
    
// });


// app.listen(PORT ,()=>{
//     console.log(`server runing on ${PORT}`);
    
// } )


const startServer = async ()=>{
    try {
        await connetDB.getConnection();
        console.log("database connected sucessfully");

app.listen(PORT , ()=>{
    console.log(`server runing on ${PORT}`);
    
})

        
    } catch (error) {
        console.log(error)
    }
}


startServer();