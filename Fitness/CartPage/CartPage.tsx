import { Shop } from "@/app/Context and Reducer Ftiness/Context";
import { StaticImageData } from "next/image";
import { useContext, useState } from "react";
import { Badge, Button, Col, Container, Dropdown, Nav, Navbar, Offcanvas, Row } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import Image from "next/image";
import "./CartStyle.css"
import FitnessNavbar from "../FitnessPage/FitnessNavbar.tsx"

const CartPage = () => {
    const {cartProducts, total, removeFromCart} = useContext(Shop)

    return (
        <div>
            <FitnessNavbar />
            {
                cartProducts.map((prod:{product:{name: string, price:number, image:StaticImageData, description: string}, amount: number}, i) => (
                    <div className="singleCartProduct">
                    <Container fluid>
                        <Row>
                            <Col xs={3} sm={4} md={3} lg={3} xl={2}>
                                <Image src={prod.product.image} alt={prod.product.name} className="imageCartProduct" />
                            </Col>
                            <Col xs={5} sm={5} md={6} lg={6} xl={8}>
                                <h5>{prod.product.name}</h5>
                                <p className="priceCartProduct">Price: ${prod.product.price}</p>
                                <p>Amount: {prod.amount}</p>
                            </Col>
                            <Col xs={4} sm={3} md={3} lg={3} xl={2}>
                                <p style={{fontWeight: "700"}}>Total price: ${prod.product.price * prod.amount}</p>
                                <button className="removeFromCartButton" onClick={() => removeFromCart(prod)}>Remove from Cart</button>
                            </Col>
                        </Row>
                    </Container>
                    </div>
                ))
            }
            <p className="totalPrice" >Total: ${total}</p>
            <Button variant="primary" disabled={cartProducts.length === 0} style={{marginLeft: "7px"}} >Proceed to Checkout</Button >
        </div>
    )
}
export default CartPage;
