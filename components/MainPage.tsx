import download from "../images/download.jpg"
import Image from "next/image"
import fitness from "../images/fitness.jpg"
import "./MainPageStyles.css"
import { Link } from "react-router-dom"

const  MainPage =() => {
    return (
        <div className="theBigContainer">
            <h1 className="mainHeading">choose your goal</h1>
            <Link to="/Fitness" >
            <div className="containerOfImg1">
                <Image src={fitness} alt="Fitness" className="mainImg1" />
                <h4 className="mainHeading41">Fitness</h4>
            </div>
            </Link>
            <Link to="/BodyBuilding">
            <div className="containerOfImg2">
                <Image src={download} alt="Body Building" className="mainImg2" />
                <h4 className="mainHeading42">Body<br /> Building</h4>
            </div>
            </Link>
        </div>
    )
}
export default MainPage;