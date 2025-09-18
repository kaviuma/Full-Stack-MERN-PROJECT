let path = require("path");
let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");
let signupdata = require(path.join(__dirname,"..","model","signup.model"))


module.exports = {

    signup: async(req,res)=>{
        console.log(req.body);
        

let {name,email,password} = req.body;
    
let check = await signupdata.findOne({email});      

if(check){
    return res.json({
        msg : "Email Already Have"
    });
}

let hashpassword = await bcrypt.hash(password,10);


signupdata.create({
    name,
    email,
    password : hashpassword
})

.then(()=>{
    return res.json({
        msg  : "Account Created",
        status:true
    })
})
.catch(()=>{
    return res.json({
        msg :"Error to create account",
        status:false
    })

})


},
signin : async (req,res)=>{

    let {email,password} = req.body;

    try {
           let check = await signupdata.findOne({email:email})
           
    if(!check){
        return res.json({
            msg :"Email not found",
            status : false  
        });

    }

    let token = jwt.sign({email:check.email},process.env.KEY,{expiresIn:"30m"}) 

    res.json({
        data: check,
         id : token,
         status : true ,
          msg  : " login successfull"
    })
        
    } catch (error) {

        res.json ({
            msg : "login unsuccessfull",
            status : false
        })
        
    }

}


};
