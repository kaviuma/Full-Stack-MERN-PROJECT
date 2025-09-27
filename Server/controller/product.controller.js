let path = require("path");
let IdModel = require(path.join(__dirname,"..","model","Cart.model.js"))
let product = require(path.join(__dirname, "..", "model", "product.model.js"));
let Order = require(path.join(__dirname,"..","model","Order.model.js"))
let nodemailer = require("nodemailer");


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
      let fashions = await product.find({category : "fashion"});
      let groceries = await product.find({category: "grocery"});
      
      return res.json({
        msg: "All Products",
        mobiles,
        laptops,
        electronics,
        televisions,
        fashions,
        groceries
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

  addcart: async (req, res) => {
  try {
    let { id } = req.body;

    let cart = await IdModel.create({ item: id });
    console.log(cart);

    res.json({
      status: true,
      msg: "Product Added to Cart",
      cart
    });
  } catch (error) {
    console.log(error);
    res.json({ msg: "Error adding to cart", error });
  }
  },

  getcart: async (req, res) => {
  try {
  
     let cartItems = await IdModel.find(); 

    let productDetails = await Promise.all(
      cartItems.map(async (i) => await product.findById(i.item))
    );
     res.json(productDetails);
  } 
  catch (error) {
    console.error(error);
    res.json({ 
      msg: "Error fetching cart items"
     });
  }
  },

  removeCartItem : async (req, res) => {
  try {
    let { id } = req.params;
           const deleted = await IdModel.deleteOne({ item: id });
           console.log(deleted);
           res.json({ 
            msg: "Item removed from cart" 
          });
      } 
 catch (error) {
    console.log(error);
    res.json({
       msg: "Error"
      });
  }
  }, 
  
  Order: async (req, res) => {
    console.log(req.body);
    let { name, email, address, products,quantity ,  totalPrice } = req.body;

    try {
      // 1. Save order in DB
      let details = await Order.create({
        name,
        email,
        address,
        products,
        quantity,
        totalPrice
      });

      console.log("Order saved:", details); 
      
      // 2. Setup transporter
      let transporter = nodemailer.createTransport({
        service: "gmail", // or smtp config
        auth: {
          user: process.env.EMAIL_USER, // set in .env
          pass: process.env.EMAIL_PASS  // app password
        }
      });

      // 3. Create HTML for order items
      let productList = products
        .map(
          (p) =>
            `<li>${p.name} - ₹${p.price} × ${p.quantity}</li>`
        )
        .join("");
 // 4. Mail options
      let mailOptions = {
        from: `"My Shop" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Order Confirmation #${details._id}`,
        html: `
          <h2>Hi ${name},</h2>
          <p>Thank you for your order! 🎉</p>
          <p>Your order <b>#${details._id}</b> has been placed successfully.</p>

          <h3>Shipping Address:</h3>
          <p>${address}</p>
           <h3>Order Summary:</h3>
          <ul>
            ${productList}
          </ul>

          <p><b>Total:</b> ₹${totalPrice}</p>
          <br/>
          <p>We will notify you once your order is shipped.</p>
          <p>– Our's Shop</p>
        `
      };
 // 5. Send email
      await transporter.sendMail(mailOptions);
      console.log("Order confirmation email sent");

      return res.send("# Successfully placed order & email sent #");
    } 
    catch (error) {
      console.error(error);
      return res.send("Error to Place Order");
    }
  }
};




   

 
//   Order: async (req, res) => {
//   console.log(req.body);
//   let { name, email, address,products,totalPrice } = req.body;

//   try {
//     let details = await Order.create({
//       name: name,
//       email: email,
//       address: address,
//       products: products,
//       totalPrice: totalPrice
//     });

//     console.log(details);
//     return res.send("# Successfully #");
//   } catch (error) {
//     console.error(error);
//     return res.send("Error to Place Order");
//   }
// }










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
