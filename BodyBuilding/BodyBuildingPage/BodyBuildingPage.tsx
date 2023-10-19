import { Badge, Button, Container, Dropdown, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./bodybuildingstyle.css";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import bodyBuilding from "../../images/bodyBuildingImages/bodyBuilding.jpg"
import Image from "next/image";
import { useContext, useState } from "react";
import { Shop } from "@/app/Context and Reducer Ftiness/Context";
import BDNavbar from "./BDNavbar.tsx"

const BodyBuilding = () => {
  const {dbCartProduct} = useContext(Shop)
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false)
    return (
        <div>
             <BDNavbar />
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
