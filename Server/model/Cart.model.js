let mongoose = require("mongoose")

let IdSchema = new mongoose.Schema({
    
    item : {
        type : String
    }
});

let IdModel = mongoose.model("Cart",IdSchema);

module.exports = IdModel;