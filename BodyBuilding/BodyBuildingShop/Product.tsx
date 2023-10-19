import { Shop } from "@/app/Context and Reducer Ftiness/Context";
import Image, { StaticImageData } from "next/image";
import { useContext, useState } from "react";
import { Badge, Button, Col, Container, Dropdown, Nav, Navbar, Offcanvas, Row } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./product.css";
import BDNavbar from "../BodyBuildingPage/BDNavbar.tsx"

const BDProduct = () => {
    const {showededProduct, addAmount, removeAmount, amount, dbAddToCart, removeFromShow, dbCartProduct} = useContext(Shop)
    return (
        <div>
           <BDNavbar />
      <div className="bdContainerOfSingleProduct">
        {
            showededProduct.map((prod: {name: string, image: StaticImageData, price: number, description: string},i) => (
                <div className="dbSingleProductContainer">
                <Container fluid>
                    <Row>
                        <Col xs={5} sm={6} md={4} lg={4} >
                        <Image src={prod.image} alt={prod.name} className="bdImageOfProduct"/>
                        </Col>
                        <Col xs={7} sm={6} md={8} lg={8}>
                        <h5 style={{marginTop: "12px"}}>{prod.name}</h5>
                        <p>{prod.description}</p>
                        <p style={{fontWeight: "bold"}}>Quantity:</p>
                        <div>
                            <button onClick={() => removeAmount(amount)} className="dbRemoveAmount" >-</button>
                            <input value={amount} className="dbInputProduct" />
                            <button onClick={() => addAmount(amount)} className="dbAddAmount">+</button>
                        </div>
                        <p>Total: ${prod.price * amount}</p>
                        <Link to="/BodyBuilding/Shop">
                        <Button onClick={() => dbAddToCart(prod, amount)} className="dbAddToCart">Add to Cart</Button>
                        </Link>
                        </Col>
                    </Row>
                </Container>
            </div>
            ))
        }
      </div>
        </div>
    )
}
export default BDProduct;
