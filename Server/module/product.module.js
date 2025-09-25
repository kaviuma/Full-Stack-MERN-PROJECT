let express = require("express");
let path = require("path");
let { addtheproducts , gettheproducts , getByCategory , getsingleProduct , addcart , getcart , removeCartItem , Order} = require(path.join(__dirname, "..", "controller", "product.controller"));

let ProductRouter = express.Router(); 

ProductRouter.post("/addproduct", addtheproducts);  
ProductRouter.get("/getproduct",gettheproducts);
ProductRouter.get("/products/:category",getByCategory);
ProductRouter.get("/singleproduct/:id",getsingleProduct);
ProductRouter.post("/addcart",addcart);
ProductRouter.get("/items",getcart)
ProductRouter.delete("/cart/:id", removeCartItem);
ProductRouter.post("/order",Order)



module.exports = ProductRouter;











// ProductRouter.delete("/delproduct/:name",deletetheproduct)
// ProductRouter.put("/updateproduct/:name",updatetheproduct)
