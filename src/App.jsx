import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AddProduct from "./components/AddProduct";
import DeleteProduct from './components/DeleteProduct'
import UpdateProduct from './components/UpdateProduct'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addProduct" element={<AddProduct/>} />
        <Route exact path="/updateProduct" element={<UpdateProduct/>} />
        <Route exact path="/deleteProduct" element={<DeleteProduct/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
