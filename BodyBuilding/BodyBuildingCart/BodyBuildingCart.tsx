import { Shop } from "@/app/Context and Reducer Ftiness/Context";
import Image, { StaticImageData } from "next/image";
import { useContext, useState } from "react";
import { Badge, Button, Col, Container, Dropdown, Nav, Navbar, Offcanvas, Row } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./BodyBuildingStyle.css";

const BDCart = () => {
    const {dbCartProduct, dbRemoveFromCart, dbTotal} = useContext(Shop)
    const [show, setShow] = useState(false)
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false)
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark" className="navbar" >
        <Container fluid>
            <Link to="/BodyBuilding" className="textDeco">
          <Navbar.Brand>Haddad's Gym</Navbar.Brand>
          </Link>
          <Nav className="m-auto">
            <Link to="/BodyBuilding/Shop" className="textDeco">
            <Nav className="navPage2" >Shop</Nav>
            </Link>
            <Link to="/BodyBuilding/Coaches" className="textDeco">
            <Nav className="navPage" >Meet your Coach</Nav>
            </Link>
            <Link to="/BodyBuilding/Workout" className="textDeco">
            <Nav className="navPage" >Workout Plans</Nav>
            </Link>
          </Nav>
          <Link to="/">
            <button className="changedButton">Changed my mind</button>
            </Link>
            <Link to="/BodyBuilding/Cart">
            <BiShoppingBag className="shoppingBag" />
            </Link>
            <Badge bg="dark" className="badge">{dbCartProduct.length}</Badge>
            <div className="disappearTabletSize">
            <Button variant="danger" onClick={handleShow} className="me-2">
        Nav
      </Button>
      <Offcanvas placement="end" data-bs-theme="dark" show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Navigation Side</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Link to="/BodyBuilding/Shop" className="textDeco">
            <Nav className="pageNavSide">Shop Page</Nav>
            </Link>
            <Link to="/BodyBuilding/Coaches" className="textDeco">
            <Nav className="pageNavSide">Meet your Coach Page</Nav>
            </Link>
            <Link to="/BodyBuilding/Workout" className="textDeco">
            <Nav className="pageNavSide">Workout Plans Page</Nav>
            </Link>
            <Link to="/BodyBuilding/Cart" className="textDeco">
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