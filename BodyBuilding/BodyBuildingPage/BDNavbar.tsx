import { Navbar, Badge, Nav, Container, Button, Offcanvas} from "react-bootstrap";
import "./bodybuildingstyle.css"
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { Shop } from "@/app/Context and Reducer Ftiness/Context";

const BDNavbar = () => {
    const {dbCartProduct, removeFromShow} = useContext(Shop)
    const [show, setShow] = useState(false)
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false)

    return (
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
    )
}
export default BDNavbar;