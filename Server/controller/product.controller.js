let path = require("path");
// const { PRODUCT } = require("../../Client/src/store/product.store");
let product = require(path.join(__dirname, "..", "model", "product.model.js"));


module.exports = {
  addtheproducts: async (req, res) => {
    console.log(req.body);
    let { name, price, description, category, quantity, image_url } = req.body;

    try {
      let details = await product.create({name: name, price: price, description: description,category: category,quantity: quantity,image_url: image_url});
      console.log(details);
      return res.send("Added");
    }
     catch (error) {
      return res.send("Error to Add the Product");
    }
  },
 
  gettheproducts: async (req, res) => {
    try {
      let mobiles = await product.find({ category: "mobile" });
      let laptops = await product.find({ category: "laptop" });
      let televisions = await product.find({category:"television"});
      let electronics = await product.find({ category: "electronics" });
      let fashions = await product.find({category : "fashion"})

      return res.json({
        msg: "All Products",
        mobiles,
        laptops,
        electronics,
        televisions,
        fashions
      });
    }
    catch (e) {
      return res.json({ 
        msg: "Error fetching products"
       });
    }
  },

  getByCategory: async (req, res) => {
    try {
      let { category } = req.params;
      let products = await product.find({ category });

      return res.json({ msg: "All products", List: products });
    } catch (error) {
      res.json({ error: " Failed to fetch products" });
    }
  },
  
  getsingleProduct : async (req,res)=>{ 
   let { id } = req.params;

   try {
     let singleProduct = await product.findById(id);
      res.json(singleProduct);
   } 
   catch (error) {
    res.json({ 
      msg: " Error" 
    });
   }


  },

  addcart: async(req,res)=>{
    let {ProductId} = req.params;

    try {
      let cartproduct = await product.findById(ProductId);
       if (!cartproduct) {
        return res.json({ message: "Product not found" });
      }
      res.json({ message: "Added to cart" });
    } catch (error) {
       console.log( error);
    }
  }

   

};



// ,,

// deletetheproduct : async (req,res)=>{

//     let {name} = req.params;
//     console.log(name);
//   try {
//        await product.deleteOne({name:name})
//        return res.json({
//                         msg : "DELETED the product"
//                        })
//       }
//   catch(error){
//                res.json({
//                          msg :"ERROR to delete"
//                         })
//       }   

// },

// updatetheproduct : async(req,res)=>{ 
//     let {name} = req.params; 
//     console.log(name);

//     try { 
//         let updated = await product.findOneAndUpdate(
//             { name: name },{ 
//                 name: req.body.name, 
//                 price: req.body.price, 
//                 description: req.body.description, 
//                 category: req.body.category 
//             }, 
//             { new: true }
//         );

//         console.log(req.body);

//         res.json({ 
//             msg : "Updated Successfully", 
//             data: updated 
//         }); 
//     }  
//     catch (error) { 
//         res.json({ 
//             msg :"Error" 
//         }); 
//     } 
// },






