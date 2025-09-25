let express = require("express")
let dotenv = require("dotenv");
dotenv.config();
let cors = require("cors");
let path = require("path");
let authRouter = require(path.join(__dirname,"module","auth.module"));
let ProductRouter = require(path.join(__dirname,"module","product.module.js"))
let { DatabaseConnection } = require(path.join(__dirname,"utilities","Database"))
DatabaseConnection()


let app = express();
app.use(cors())

app.use(express.json())

app.use("/api/auth",authRouter)
app.use("/api",ProductRouter)

app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`);   
})
