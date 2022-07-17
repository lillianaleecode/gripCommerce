import { Home } from "./pages/Home";
import Login from "./pages/Login";
import  ProductList  from "./pages/ProductList";
import Register from "./pages/Register";
// import Product from "./pages/Product";
// import Cart from "./pages/Cart"

  import {
    BrowserRouter as Router, //switch is substituted by Router in react-router v6
    Routes,
    Route
  } from "react-router-dom";


const App = () => {
  return (
<Router>


  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/products/:category" element={<ProductList />} />

    {/* to be included in the future: */}
    {/* <Route path="/product/:id" element={<Product />} /> */}
    {/* <Route path="/cart" element={<Cart />} /> */}
   
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register/>} />
  </Routes>

</Router>
);
};

export default App;