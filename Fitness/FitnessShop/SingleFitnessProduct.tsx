import { Shop } from "@/app/Context and Reducer Ftiness/Context";
import Image,{ StaticImageData } from "next/image";
import { useContext, useEffect, useState } from "react";
import { Badge, Button, Col, Container, Dropdown, Nav, Navbar, Offcanvas, Row } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./SingleFitnessProductStyle.css"


const SingleFitnessProduct = () => {
  const {showededProduct, addToCart, amount, removeFromShow, addAmount, removeAmount, cartProducts} = useContext(Shop)
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false)
    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark" className="navbar">
        <Container fluid>
            <Link to="/Fitness" className="textDeco">
          <Navbar.Brand onClick={() => removeFromShow()}>Haddad's Gym</Navbar.Brand>
          </Link>
          <Nav className="m-auto">
            <Link to="/Fitness/Shop" className="textDeco">
            <Nav className="piece2" onClick={() => removeFromShow()}>Shop</Nav>
            </Link>
            <Link to="/Fitness/Coaches" className="textDeco">
            <Nav className="piece" onClick={() => removeFromShow()}>Meet your coach</Nav>
            </Link>
            <Link to="/Fitness/Workout" className="textDeco">
            <Nav className="piece" onClick={() => removeFromShow()}>Workout plans</Nav>
            </Link>
          </Nav>
          <Link to="/" className="textDeco">
          <button className="changeBttn" onClick={() => removeFromShow()}>Changed my mind</button>
          </Link>
          <Link to="/Fitness/Cart" className="textDeco">
          <BiShoppingBag className="shoppingTag" onClick={() => removeFromShow()}/>
          </Link>
          <Badge>{cartProducts.length}</Badge>
          <div className="disappearTabletSize">
            <Button variant="success" onClick={handleShow} className="me-2">
        Nav
      </Button>
      <Offcanvas placement="end" data-bs-theme="dark" show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Navigation Side</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Link to="/Fitness/Shop" className="textDeco">
            <Nav className="pageNavSide" onClick={() => removeFromShow()}>Shop Page</Nav>
            </Link>
            <Link to="/Fitness/Coaches" className="textDeco">
            <Nav className="pageNavSide" onClick={() => removeFromShow()}>Meet your Coach Page</Nav>
            </Link>
            <Link to="/Fitness/Workout" className="textDeco">
            <Nav className="pageNavSide" onClick={() => removeFromShow()}>Workout Plans Page</Nav>
            </Link>
            <Link to="/Fitness/Cart" className="textDeco">
              <Nav className="pageNavSide" onClick={() => removeFromShow()}>Cart Page</Nav>
            </Link>
            <Link to="/">
              <button className="buttonNavSide" onClick={() => removeFromShow()}>Changed my Mind</button>
            </Link>
        </Offcanvas.Body>
      </Offcanvas>
            </div>
        </Container>
      </Navbar>
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