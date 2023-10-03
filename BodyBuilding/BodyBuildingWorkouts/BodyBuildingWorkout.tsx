import { Shop } from "@/app/Context and Reducer Ftiness/Context";
import { useContext, useState } from "react";
import { Badge, Button, Card, Container, Dropdown, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { trainingData } from "./trainningData";
import Image, { StaticImageData } from "next/image";
import RatingTrain from "./RatingTrain";
import "./BodyBuildingWorkoutStyle.css";

const BDWorkout = () => {
    const {dbCartProduct, showLegTrain, showAbsTrain ,showedTrain, showAllTrain, showBicepsTrain,showChestTrain} = useContext(Shop)
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
        <div className="sortingNavbar">
            <button onClick={() => showAllTrain(showedTrain)} className="sortingButton">All</button>
            <button onClick={() => showBicepsTrain(showedTrain)} className="sortingButton">Biceps</button>
            <button onClick={() => showChestTrain(showedTrain)} className="sortingButton">Chest</button>
            <button onClick={() => showLegTrain(showedTrain)} className="sortingButton">Leg</button>
            <button onClick={() => showAbsTrain(showedTrain)} className="sortingButton">Abs</button>
        </div>
        <div className="TheBigContainer">
        {
            showedTrain.map((train: {name: string, image: StaticImageData, rate: number, muscle: string}, i) => (
                <div key={i} className="containerOfTrain">
                    <span>
                    <Image src={train.image} alt={train.name} className="imageOfTraining" />
                    </span>
                    <div style={{marginLeft: "5px"}}>
                        <h6 style={{marginTop: "4px", fontWeight: "bold"}}>{train.name}</h6>
                        <p style={{fontWeight: "550"}}>Muscle: {train.muscle}</p>
                        <RatingTrain rate={train.rate} />
                    </div>
                    </div>
            ))
}
        </div>
        </div>
    )
}
export default BDWorkout;