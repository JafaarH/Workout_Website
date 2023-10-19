import { Shop } from "@/app/Context and Reducer Ftiness/Context";
import Image, { StaticImageData } from "next/image";
import { useContext, useState } from "react";
import { Badge, Button, Col, Container, Dropdown, Nav, Navbar, Offcanvas, Row } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./BodyBuildingStyle.css";
import BDNavbar from "../BodyBuildingPage/BDNavbar.tsx"

const BDCart = () => {
    const {dbCartProduct, dbRemoveFromCart, dbTotal} = useContext(Shop)
    
    return (
        <div>
            <BDNavbar />
        {
          dbCartProduct.map((prod:{product:{name:string, price: number, image: StaticImageData}, amount: number},i) => (
           <div key={i} className="dbCartProduct" >
            <Container fluid>
              <Row>
              <Col xs={3} sm={4} md={3} lg={3} xl={2}>
              <Image src={prod.product.image} alt={prod.product.name} className="dbImageCartProduct" />
              </Col>
              <Col xs={5} sm={5} md={6} lg={6} xl={8}>
              <h5>{prod.product.name}</h5>
              <p className="dbPriceCartProduct">Price: ${prod.product.price}</p>
              <p>Amount: {prod.amount}</p>
              </Col>
              <Col xs={4} sm={3} md={3} lg={3} xl={2}>
              <p style={{fontWeight: "700"}}>Total Price: ${prod.product.price * prod.amount}</p>
              <button className="dbRemoveFromCartButton" onClick={() => dbRemoveFromCart(prod)}>Remove from Cart</button>
              </Col>
          </Row>
      </Container>
      </div>
      ))}
      <p className="dbTotalPrice">Total Price: ${dbTotal}</p>
      <Button variant="primary" disabled={dbCartProduct.length === 0} style={{marginLeft: "7px"}}>Proceed to Checkout</Button>
        </div>
    )
}
export default BDCart;
