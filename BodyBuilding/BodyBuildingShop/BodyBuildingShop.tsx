import { Badge, Button, Container, Dropdown, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { BodyBuildingStore } from "./BodyBuildingStore";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import Image from "next/image"
import "./BodyBuildingStyle.css"
import { Shop } from "@/app/Context and Reducer Ftiness/Context";
import { useContext, useState } from "react";

const BodyBuildingShop = () => {
    const {showededProduct, showProduct, dbCartProduct} = useContext(Shop)
    const [show, setShow] = useState(false)
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false)
    return (
        <div className="body">
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
      <div>
        <h2 className="bdHeading2">Body Building Shop</h2>
        <p className="bdPara">Here you will find everything you need for <br/>home body building workout</p>
       <div className="theBigPDContainer">
        {
            BodyBuildingStore.map((product, i) => (
                <div key={i} className="bdProductContainer">
                    <Link to="/BodyBuilding/Product" className="textDeco" style={{color: "inherit"}}>
                        <div onClick={() => showProduct(product)}>
                    <div>
                    <Image src={product.image} alt={product.name} className="bdImageShop" />
                    </div>
                    <div className="bdTitle">
                    <h6 style={{marginTop: "8px"}}>{product.name}</h6>
                    <p>${product.price}</p>
                    </div>
                    </div>
                    </Link>
                </div>
            ))
        }
       </div>
      </div>
        </div>
    )
}
export default BodyBuildingShop;