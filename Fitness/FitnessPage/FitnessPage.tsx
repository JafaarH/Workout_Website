import { Badge, Button, Container, Dropdown, Nav, Navbar, Offcanvas } from "react-bootstrap";
import {Link} from "react-router-dom"
import "./FitnessPageStyle.css"
import {BiShoppingBag} from "react-icons/bi"
import Image from "next/image"
import running from "../../images/running.jpg"
import { Shop } from "@/app/Context and Reducer Ftiness/Context";
import { useContext, useState } from "react";
import FitnessNavbar from "./FitnessNavbar.tsx"

const FitnessPage =() => {
  const {cartProducts} = useContext(Shop)
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false)
    return (
        <div>
           <FitnessNavbar />
      <div className="peopleRunning">
        <Image src={running} alt="people running" className="ImgPeopleRunning" />
        <div className="welcome">
            <h2 className="h2">Welcome to <br />fitness section</h2>
        </div>
      </div>
      <h3 className="h3">What is Haddad's Gym about?</h3>
      <div className="paragraph">
      <p className="para"><span style={{fontSize: "20px", fontWeight: "500"}}>Haddad's Gym</span> is created by a group of young people those who interested in fitness and
      body building and willing to make people healthier and stronger with the help of our professional
      coaches.
      </p>
      </div>
      <h3 className="h31">Our Goal <span style={{fontWeight: "400", fontSize: "21px"}}>in this section</span></h3>
      <div className="paragraph">
        <p className="para"><ul>
          <li>Making fitness approachable for as many people as possible</li>
          <li>Burning fats and reducing the weight of the person</li>
          <li>Make people sporty and by that reducing the risk of many diseases</li>
          <li>Making healthy lifestyle to people and encourge them to eat healthy food</li>
        </ul>
        </p>
      </div>
        </div>
    )
}
export default FitnessPage;
