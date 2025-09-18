let jwt = require("jsonwebtoken");

function tokenprovide(info){

    let token = jwt.sign({email:info.email},process.env.KEY,{expiresIn:"1h"})


    return token;
}


module.exports = tokenprovide;