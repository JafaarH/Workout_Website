import { Badge, Button, Container, Dropdown, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./bodybuildingstyle.css";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import bodyBuilding from "../../images/bodyBuildingImages/bodyBuilding.jpg"
import Image from "next/image";
import { useContext, useState } from "react";
import { Shop } from "@/app/Context and Reducer Ftiness/Context";
 
const BodyBuilding = () => {
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
        <Image src={bodyBuilding} alt="Body Building" className="bodyBuildingImage" />
        <div className="welcomeDiv" >
            <h4 className="heading4" >Welcome to <br/>Body Building</h4>
        </div>
        <div>
            <h3 className="heading3">What is Haddad's Gym about?</h3>
            <div className="containerOfSpeach">
            <p className="speach"><span style={{fontSize: "20px", fontWeight: "500"}}>Haddad's Gym</span> is created by a group of young people those who interested in fitness and
      body building and willing to make people healthier and stronger with the help of our professional
      coaches.</p>
            </div>
            <h3 className="heading3">Our Goal <span style={{fontWeight: "400", fontSize: "21px"}}>in this section</span></h3>
            <div className="containerOfSpeach">
                <p className="speach"><ul>
                    <li>Spreading body building sport</li>
                    <li>To make as many people as possible train in this game</li>
                    <li>Make the body healthier and stronger</li>
                    <li>Building muscles for the beauty of the body</li>
                </ul>
                </p>
            </div>
        </div>
      </div>
        </div>
    )
}
export default BodyBuilding;