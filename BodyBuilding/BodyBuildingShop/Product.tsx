import { Shop } from "@/app/Context and Reducer Ftiness/Context";
import Image, { StaticImageData } from "next/image";
import { useContext, useState } from "react";
import { Badge, Button, Col, Container, Dropdown, Nav, Navbar, Offcanvas, Row } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./product.css";

const BDProduct = () => {
    const {showededProduct, addAmount, removeAmount, amount, dbAddToCart, removeFromShow, dbCartProduct} = useContext(Shop)
    const [show, setShow] = useState(false)
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false)
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark" className="navbar" >
        <Container fluid>
            <Link to="/BodyBuilding" className="textDeco">
          <Navbar.Brand onClick={() => removeFromShow()}>Haddad's Gym</Navbar.Brand>
          </Link>
          <Nav className="m-auto">
            <Link to="/BodyBuilding/Shop" className="textDeco">
            <Nav className="navPage2" onClick={() => removeFromShow()}>Shop</Nav>
            </Link>
            <Link to="/BodyBuilding/Coaches" className="textDeco">
            <Nav className="navPage" onClick={() => removeFromShow()}>Meet your Coach</Nav>
            </Link>
            <Link to="/BodyBuilding/Workout" className="textDeco">
            <Nav className="navPage" onClick={() => removeFromShow()}>Workout Plans</Nav>
            </Link>
          </Nav>
          <Link to="/">
            <button className="changedButton" onClick={() => removeFromShow()}>Changed my mind</button>
            </Link>
            <Link to="/BodyBuilding/Cart">
            <BiShoppingBag className="shoppingBag" onClick={() => removeFromShow()}/>
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
            <Nav className="pageNavSide" onClick={() => removeFromShow()}>Shop Page</Nav>
            </Link>
            <Link to="/BodyBuilding/Coaches" className="textDeco">
            <Nav className="pageNavSide" onClick={() => removeFromShow()}>Meet your Coach Page</Nav>
            </Link>
            <Link to="/BodyBuilding/Workout" className="textDeco">
            <Nav className="pageNavSide" onClick={() => removeFromShow()}>Workout Plans Page</Nav>
            </Link>
            <Link to="/BodyBuilding/Cart" className="textDeco">
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