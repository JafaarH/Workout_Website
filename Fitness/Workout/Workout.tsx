import { Shop } from "@/app/Context and Reducer Ftiness/Context";
import { useContext, useState } from "react";
import { Badge, Button, Col, Container, Dropdown, Nav, Navbar, Offcanvas, Row } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import {useQuery} from "react-query"
import { Link } from "react-router-dom";
import { dataWorkout } from "./dataWorkout";
import Image from "next/image";
import "./WorkoutStyle.css";
import Rating from "./RatingSystem";

const Workout = () => {
    const {cartProducts} = useContext(Shop)
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
        dataWorkout.map((move, i)=> (
            <div key={i} className="workout" >
            <Container fluid>
                <Row>
            <Col sm={4} md={4} lg={3} xl={3} >
            <Image src={move.image} alt={move.name} className="imageMovement" />
            </Col>
            <Col sm={8} md={8} lg={9} xl={9} >
                <div className="Lpart">
            <h6>{move.name}</h6>
            <p>{move.description}</p>
            <Rating rate={move.rate} />
            </div>
            </Col>
                </Row>
            </Container>
            </div>
        ))
      }
        </div>
    )
}
export default Workout;