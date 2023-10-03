import { Shop } from "@/app/Context and Reducer Ftiness/Context";
import { useContext, useState } from "react";
import { Badge, Button, Col, Container, Dropdown, Nav, Navbar, Offcanvas, Row } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { CoachesData } from "./CoachesData";
import Image from "next/image";
import Rating2 from "./Rating2";
import { AiOutlineMessage } from "react-icons/ai";
import {FiPhoneCall} from "react-icons/fi";
import "./CoachesStyle.css";

const Coach = () => {
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
          <Nav className="m-auto">
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
        CoachesData.map((coach, i) => (
            <div key={i}  className="coach" >
                <Container fluid>
                    <Row>
                        <Col xs={5} sm={5} md={4} lg={3} >
                            <Image src={coach.image} alt={coach.name} className="coachImage" />
                        </Col>
                        <Col xs={7} sm={7} md={8} lg={9} >
                            <h6>{coach.name}</h6>
                            <p>{coach.description}</p>
                            <div className="coachRatePrice">
                                <Rating2 rate={coach.rate} />
                                <p>${coach.price}/month</p>
                            </div>
                            <AiOutlineMessage className="message" />
                            <FiPhoneCall className="phoneCall" />
                        </Col>
                    </Row>
                </Container>
            </div>
        ))
      }
        </div>
    )
}
export default Coach;