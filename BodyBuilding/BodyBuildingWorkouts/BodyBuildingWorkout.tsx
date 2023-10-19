import { Shop } from "@/app/Context and Reducer Ftiness/Context";
import { useContext, useState } from "react";
import { Badge, Button, Card, Container, Dropdown, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import { trainingData } from "./trainningData";
import Image, { StaticImageData } from "next/image";
import RatingTrain from "./RatingTrain";
import "./BodyBuildingWorkoutStyle.css";
import BDNavbar from "../BodyBuildingPage/BDNavbar.tsx"

const BDWorkout = () => {
    const {dbCartProduct, showLegTrain, showAbsTrain ,showedTrain, showAllTrain, showBicepsTrain,showChestTrain} = useContext(Shop)
    
    return (
        <div>
           <BDNavbar />
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
