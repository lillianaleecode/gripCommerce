import { Home } from "./pages/Home";

// import Login from "./pages/Login";
// import  ProductList  from "./pages/ProductList";
// import Register from "./pages/Register";

  import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";


const App = () => {
  return (
<Router>


  <Routes>
    <Route path="/" element={<Home/>} />
  </Routes>

</Router>
);
};

export default App;