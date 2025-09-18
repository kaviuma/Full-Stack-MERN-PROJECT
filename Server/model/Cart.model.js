let mongoose = require("mongoose")

let CartSchema = new mongoose.Schema({
    
    id : {
        type : String
    }
});

let Schema = mongoose.model("Cart",CartSchema);

module.exports = Schema;