let mongoose = require("mongoose");

let OrderSchema = new mongoose.Schema({
    name : {
        type : String
    },
    email : {
        type : String
    },
    address : {
        type : String
    },
    products : {
        type : []
    }
});



let OrderModel = mongoose.model("Order",OrderSchema);
module.exports = OrderModel;