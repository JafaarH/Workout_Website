import { Shop } from "@/app/Context and Reducer Ftiness/Context";
import { StaticImageData } from "next/image";
import { useContext, useState } from "react";
import { Badge, Button, Col, Container, Dropdown, Nav, Navbar, Offcanvas, Row } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import Image from "next/image";
import "./CartStyle.css"

const CartPage = () => {
    const {cartProducts, total, removeFromCart} = useContext(Shop)
    const [show, setShow] = useState(false)
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false)
    return (
        <div>
            <Navbar bg="primary" data-bs-theme="dark" className="navbar">
                <Container fluid>
            <Link to="/Fitness" className="textDeco">
          <Navbar.Brand>Haddad's Gym</Navbar.Brand>
          </Link>
          <Nav className="m-auto" >
            <Link to="/Fitness/Shop" className="textDeco">
            <Nav className="piece2">Shop</Nav>
            </Link>
            <Link to="/Fitness/Coaches" className="textDeco">
            <Nav className="piece">Meet your coach</Nav>
            </Link>
            <Link to="/Fitness/Workout" className="textDeco">
            <Nav className="piece" >Workout plans</Nav>
            </Link>
          </Nav>
          <Link to="/" className="textDeco">
          <button className="changeBttn">Changed my mind</button>
          </Link>
          <Link to="/Fitness/Cart" className="textDeco">
          <BiShoppingBag className="shoppingTag" />
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
            <Nav className="pageNavSide">Shop Page</Nav>
            </Link>
            <Link to="/Fitness/Coaches" className="textDeco">
            <Nav className="pageNavSide">Meet your Coach Page</Nav>
            </Link>
            <Link to="/Fitness/Workout" className="textDeco">
            <Nav className="pageNavSide">Workout Plans Page</Nav>
            </Link>
            <Link to="/Fitness/Cart" className="textDeco">
              <Nav className="pageNavSide">Cart Page</Nav>
            </Link>
            <Link to="/">
              <button className="buttonNavSide">Changed my Mind</button>
            </Link>
        </Offcanvas.Body>
      </Offcanvas>
            </div>
        </Container>
      </Navbar>
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