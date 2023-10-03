import { Shop } from "@/app/Context and Reducer Ftiness/Context";
import { useContext, useState } from "react";
import { Badge, Button, Col, Container, Dropdown, Nav, Navbar, Offcanvas, Row } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { BDCoachesData } from "./BodyBuildingCoachesData";
import Image, { StaticImageData } from "next/image";
import BDRating from "./BDRating";
import { AiOutlineMessage } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import "./BodyBuildingCoachStyle.css";

const BDCoaches = () => {
    const {dbCartProduct} = useContext(Shop)
    const [show, setShow] = useState(false)
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false)
    return (
        <div>
            <Navbar bg="dark" data-bs-theme="dark" className="dbnavbar" >
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
    <div>
        {
            BDCoachesData.map((coach:{name: string, price: number, image: StaticImageData, rate: number, description: string}, i) => (
                <div key={i} className="bdCoach">
                <Container fluid>
                    <Row>
                        <Col xs={5} sm={5} md={4} lg={3}>
                        <Image src={coach.image} alt={coach.name} className="bdImageCoach" />
                        </Col>
                        <Col xs={7} sm={7} md={8} lg={9}>
                        <h6>{coach.name}</h6>
                        <p>{coach.description}</p>
                        <div className="bdRatePrice">
                            <BDRating rate={coach.rate}  />
                            <p>${coach.price}/month</p>
                        </div>
                        <AiOutlineMessage className="bdMessage" />
                        <FiPhoneCall className="bdPhoneCall" />
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
export default BDCoaches;