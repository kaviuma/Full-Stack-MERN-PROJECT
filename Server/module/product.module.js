let express = require("express");
let path = require("path");
let { addtheproducts , gettheproducts , getByCategory , getsingleProduct , addcart} = require(path.join(__dirname, "..", "controller", "product.controller"));

let ProductRouter = express.Router(); 

ProductRouter.post("/addproduct", addtheproducts);  
ProductRouter.get("/getproduct",gettheproducts);
ProductRouter.get("/products/:category",getByCategory);
ProductRouter.get("/singleproduct/:id",getsingleProduct);
ProductRouter.post("/addcart/:id",addcart)



module.exports = ProductRouter;











// ProductRouter.delete("/delproduct/:name",deletetheproduct)
// ProductRouter.put("/updateproduct/:name",updatetheproduct)
