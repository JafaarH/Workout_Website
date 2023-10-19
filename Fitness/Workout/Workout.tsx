import { Shop } from "@/app/Context and Reducer Ftiness/Context";
import { useContext, useState } from "react";
import { Badge, Button, Col, Container, Dropdown, Nav, Navbar, Offcanvas, Row } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import {useQuery} from "react-query"
import { Link } from "react-router-dom";
import { dataWorkout } from "./dataWorkout";
import Image from "next/image";
import "./WorkoutStyle.css";
import Rating from "./RatingSystem";
import FitnessNavbar from "../FitnessPage/FitnessNavbar.tsx"

const Workout = () => {
    const {cartProducts} = useContext(Shop)

    return (
        <div>
            <FitnessNavbar />
      {
        dataWorkout.map((move, i)=> (
            <div key={i} className="workout" >
            <Container fluid>
                <Row>
            <Col sm={4} md={4} lg={3} xl={3} >
            <Image src={move.image} alt={move.name} className="imageMovement" />
            </Col>
            <Col sm={8} md={8} lg={9} xl={9} >
                <div className="Lpart">
            <h6>{move.name}</h6>
            <p>{move.description}</p>
            <Rating rate={move.rate} />
            </div>
            </Col>
                </Row>
            </Container>
            </div>
        ))
      }
        </div>
    )
}
export default Workout;
