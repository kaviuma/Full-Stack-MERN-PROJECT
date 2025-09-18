import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Mobile from "./Pages/Mobile";
import SignIn from "./components/Signin"
import HomeNav from "./Pages/HomeNav";
import Laptop from "./Pages/Laptop";
import Television from "./Pages/Television";
import Cart from "./Pages/Cart";
import Fashion from "./Pages/Fashion";
import Electronics from "./Pages/Electronics";
import Description from "./Pages/Description";
import Mainhome from "./Pages/Mainhome";



function App() {
  return (
    <BrowserRouter>
      <Navbar />
       <HomeNav/>
      
      <Routes>
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/"element={<Mainhome/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/mobiles" element={<Mobile/>} />
        <Route path="/laptops" element={<Laptop/>} />
        <Route path="/televisions" element={<Television/>}/>
        <Route path="/electronics" element={<Electronics/>} />
        <Route path="/fashion" element={<Fashion/>} />
        <Route path="/grocery" element={<h2>Grocery</h2>} />

        <Route path="/desc/:id" element={<Description />}></Route>
      </Routes>
   

    </BrowserRouter>
  );
}

export default App;









// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import SignUp from "./components/Signup";
// import SignIn from "./components/Signin";
// import AuthStore from "./store/Auth.store";
// import Home from "./Pages/Home";

// function App() {
//   const AuthStatus = AuthStore((state) => state.AuthStatus);

//   return (
//     <BrowserRouter>
//     <Home/>
//       <Routes>
//         <Route path="/" element={AuthStatus ? <Home /> : <SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//         <Route path="/signin" element={<SignIn />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
