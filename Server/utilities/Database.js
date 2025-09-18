let mongoose = require("mongoose")
function DatabaseConnection(){
    mongoose.connect(process.env.DATABASEURL)
    .then(()=>{
        console.log("DB CONNECTED");
        
    })
    .catch(()=>{
        console.log("ERROR TO CONNECT DB");
        
    })
}


module.exports = {DatabaseConnection};