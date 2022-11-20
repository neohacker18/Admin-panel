import React from "react";
import { Link } from "react-router-dom";
import "../../public/main.css";
import { Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={"/"}>
        <Button className="navbar__button" bg={"transparent"} color={"pink"}>
          Home
        </Button>
      </Link>
      <Link to={"/addProduct"}>
        <Button className="navbar__button" bg={"transparent"} color={"pink"}>
          Add Product
        </Button>
      </Link>
      <Link to={"/updateProduct"}>
        <Button className="navbar__button" bg={"transparent"} color={"pink"}>
          Update Product
        </Button>
      </Link>
      <Link to={"/deleteProduct"}>
        <Button className="navbar__button" bg={"transparent"} color={"pink"}>
          Delete Product
        </Button>
      </Link>
    </nav>
  );
};

export default Navbar;
