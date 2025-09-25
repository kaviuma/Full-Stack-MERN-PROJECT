import { create } from "zustand";
import axios from "axios";



export let PRODUCT = create((set) => ({
   
   mobiles : [],
   laptops: [],
   electronics:[],
   televisions:[],
   fashions:[],
   singleproduct:null,
   item:[],
   orders: [],
   


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
      let res = await axios.post("http://localhost:5000/api/addcart", { id });
      console.log("Cart updated:", res.data);
      alert(res.data.msg);
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Error adding to cart");
    }
},


getAllCart: async () => {
    try {
      let res = await axios.get("http://localhost:5000/api/items");
      console.log("Cart items:", res.data);
      set({ item: res.data });
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
},


removeCartItem: async (id) => {
    try {
     let res = await axios.delete(`http://localhost:5000/api/cart/${id}`);
      console.log(res.data);
      
    } catch (error) {
      console.log("Error removing item from cart:", error);
    }
},


placeOrder: async (Data) => {
    try {
      let res = await axios.post("http://localhost:5000/api/order", Data);
      alert("Order successfully!");
      return res.data;
    } catch (error) {
      console.log(error);
      alert(" Failed to place order.");
    }
},











// getAllOrders: async () => {
//     try {
//       let res = await axios.get("http://localhost:5000/api/order");
//       set({ orders: res.data });
//     } catch (error) {
//       console.error(error);
//     }
//   }


}));




