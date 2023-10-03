import { Badge, Button, Container, Dropdown, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./FitnessShopStyle.css"
import { FitnessStoreData } from "@/app/FitnessStoreData";
import Image, { StaticImageData } from "next/image";
import SingleFitnessProduct from "./SingleFitnessProduct";
import { useContext, useState } from "react";
import { Shop } from "@/app/Context and Reducer Ftiness/Context";



const FitnessShop =() =>{
  const {showProduct, cartProducts} = useContext(Shop)
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false)
    return (
        <div>
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
      </div>
      <div className="titling">
        <h1 className="h21">Fitness shop</h1>
        <p className="para2">Here you will find everthing you need <br/>for fitness equipment</p>
      </div>
      <div className="TheContainer">
        {
          FitnessStoreData.map((product: {name: string, price: number, image: StaticImageData, description: string, qty:number}, i)=> (
            <div className="productContainer">
                <Link to="/Fitness/Shop/FitnessProduct" className="prodTextDeco">
              <div className="span2" onClick={()=> showProduct(product)}>
              <span key={i}>
                <Image src={product.image} alt={product.name} className="productImage" />
              </span>
              <div className="titleOfProduct">
                <span className="span">{product.name}</span>
                <span className="spanPrice">${product.price}</span>
              </div>
              </div>
              </Link>
            </div>
          ))
        }
      </div>
        </div>
    )
}
export default FitnessShop;