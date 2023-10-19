import { Container, Navbar, Badge, Nav, Button, Offcanvas } from "react-bootstrap";
import {Link} from "react-router-dom"
import "./FitnessPageStyle.css"
import { BiShoppingBag } from "react-icons/bi";
import { useContext, useState } from "react";
import { Shop } from "@/app/Context and Reducer Ftiness/Context";

const FitnessNavbar = () => {
    const {cartProducts, removeFromShow} = useContext(Shop)
    const [show, setShow] = useState(false)
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false)
  
    return (
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
    )
}
export default FitnessNavbar;