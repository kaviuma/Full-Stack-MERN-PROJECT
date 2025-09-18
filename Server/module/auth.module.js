let express = require("express");
let path = require("path");
let {signup,signin} = require(path.join(__dirname,"..","controller","auth.controller"))


let authRouter = express.Router()

authRouter.post("/signup",signup)
authRouter.post("/signin",signin)

module.exports = authRouter;

       