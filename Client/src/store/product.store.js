import { create } from "zustand";
import axios from "axios";



export let PRODUCT = create((set) => ({
   
   mobiles : [],
   laptops: [],
   electronics:[],
   televisions:[],
   fashions:[],
   singleproduct:null,


getproduct : async ()=>{

     let res = await axios.get("http://localhost:5000/api/getproduct")
    try {  
        set({mobiles : res.data.mobiles})
        set({laptops : res.data.laptops})
        set({electronics : res.data.electronics})
        set({televisions: res.data.televisions})
        set({fashions: res.data.fashions})
        
      console.log(res.data.mobiles,
                  res.data.laptops);
    } 
    catch (error) {  
        alert("Error to Getproduct")
    }
},

getsingleproduct: async(id)=>{
   
    try {
         let single = await axios.get(`http://localhost:5000/api/singleproduct/${id}`);
         console.log(single.data);

      set({singleproduct:single.data})
    }
     catch (error) {
        console.log("Error to get single product");
        
    }

},

addcart: async (id) => {
  try {
    const res = await axios.post(`http://localhost:5000/api/addcart/${id}`);
    console.log(res.data);
    set({ addcart: res.data });
  } 
  catch (error) {
    console.error("Error adding to cart:", error);
  }
}

}));




