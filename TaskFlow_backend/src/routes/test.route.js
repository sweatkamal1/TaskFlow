import {testFun} from "../controllers/test.controllers.js"
import {Router} from "express"

const route = Router();


route.get("/get",testFun)

export default route;