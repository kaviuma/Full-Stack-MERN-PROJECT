let mongoose = require("mongoose");

let product = new mongoose.Schema({
  name: { 
    type: String
  },
  price: {
     type: Number
     },
  description: { 
    type: String 
  },
   category: { 
    type: String 
  },
  quantity : {
    type : Number
  },
  image_url : {
    type : String
  },
  category : {
    type : String
  }

});
let Model = mongoose.model("Product",product);
module.exports = Model;
