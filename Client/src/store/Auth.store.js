import { create } from "zustand";
import axios from "axios";

let AuthStore = create((set)=>({ 
  AuthStatus: false ,

SignUp: async (data)=>{
    try {
      let response = await axios.post("http://localhost:5000/api/auth/signup",data)
      set({AuthStatus: response.data.status})
         console.log(response.data);
         alert(response.data.msg);

    } 
    catch (error) {
      console.log(error.msg);
      alert("Signup Error");
      set({AuthStatus:false}); 
    }
},
SignIn: async(a)=>{
  try {
     let response = await axios.post("http://localhost:5000/api/auth/signin",a);
    set({AuthStatus : response.data.status});
    console.log(response.data);
    alert(response.data.msg);

  } 
  catch (error) {
    alert("Signin Error");
    set({AuthStatus:false});
  }
}

}
))

export default AuthStore;