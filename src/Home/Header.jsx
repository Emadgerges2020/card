import React from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const Header = ({ products, newproducts, addProduct }) => {
  return (
    <Navbar expand="lg" className="bg-dark text-light">
      <Container>
        <Navbar.Brand href="#" className="text-light">
          Market Shop
        </Navbar.Brand>

        <div className="products d-flex">
          {newproducts.map((product) => (
            <div className="addproducts" key={product.id}>
              <Button variant="outline-success me-2" onClick={()=>addProduct(product)}>{product.name}</Button>
            </div>
          ))}
        </div>

        <div>
          <BsFillCartPlusFill /> {products}
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
