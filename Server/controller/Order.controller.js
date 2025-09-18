const { AsyncLocalStorage } = require("async_hooks");
let path = require("path");
let Order = require(path.join(__dirname,"..","model","Order.model.js"))


module.exports = {

Order : async(req,res)=>{
     let {name,quantity} = req.body;
    try {
        let order = await Order.crea
        te({name: name,quantity:quantity});
        console.log(order);
       return res.send("Ordered")
    } 
    catch (error) {
        console.log(error);
        return res.send("Error to Order")
    }
},

getOrder : async(req,res)=>{

}


}