import { Shop } from "@/app/Context and Reducer Ftiness/Context";
import Image,{ StaticImageData } from "next/image";
import { useContext, useEffect, useState } from "react";
import { Badge, Button, Col, Container, Dropdown, Nav, Navbar, Offcanvas, Row } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./SingleFitnessProductStyle.css"
import FitnessNavbar from "../FitnessPage/FitnessNavbar.tsx"

const SingleFitnessProduct = () => {
  const {showededProduct, addToCart, amount, removeFromShow, addAmount, removeAmount, cartProducts} = useContext(Shop)
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false)
    return (
        <div>
           <FitnessNavbar />
      <div className="containerOfSingleProductContainer">
      {
      showededProduct.map((prod:{name: string, qty: number, image: StaticImageData, description: string, price: number}, i)=> (
        <div key= {i} className="singleProductContainer">
          <Container fluid>
            <Row>
              <Col xs={5} sm={6} md={4} lg={4}>
            <Image src={prod.image} alt={prod.name} className="ImageFitnessProduct" />
              </Col>
              <Col xs={7} sm={6} md={8} lg={8}>
            <h5  style={{marginTop: "12px"}}>{prod.name}</h5>
            <p>{prod.description}</p>
              <p style={{fontWeight: "bold"}}>Quantity:</p>
              <div>
              <button className="button16" onClick={() => removeAmount(amount)}>-</button>
              <input className="input6" value={amount} />
              <button className="button26" onClick={() => addAmount(amount)}>+</button>
              </div>
              <p>Total: ${prod.price * amount}</p>
            <Link to="/Fitness/Shop">
            <Button  variant="primary" onClick={() => addToCart(prod, amount)}>Add to Cart</Button>
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
export default SingleFitnessProduct;
