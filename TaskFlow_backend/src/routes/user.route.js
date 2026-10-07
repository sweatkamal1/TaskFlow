import {Router} from "express"
import {userFun} from "../controllers/user.controllers.js"

const routes= Router();

routes.get("/docker" ,userFun )
console.log(userFun);


export default routes;

