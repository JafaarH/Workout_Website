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
import BDNavbar from "../BodyBuildingPage/BDNavbar.tsx"

const BDCoaches = () => {
    const {dbCartProduct} = useContext(Shop)
    
    return (
        <div>
           <BDNavbar />
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
