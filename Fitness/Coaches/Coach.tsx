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
import FitnessNavbar from "../FitnessPage/FitnessNavbar.tsx"

const Coach = () => {
    const {cartProducts} = useContext(Shop)

    return (
        <div>
            <FitnessNavbar />
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
