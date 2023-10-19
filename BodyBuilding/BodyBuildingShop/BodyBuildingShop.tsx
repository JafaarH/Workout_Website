import { Badge, Button, Container, Dropdown, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { BodyBuildingStore } from "./BodyBuildingStore";
import { Link } from "react-router-dom";
import { BiShoppingBag } from "react-icons/bi";
import Image from "next/image"
import "./BodyBuildingStyle.css"
import { Shop } from "@/app/Context and Reducer Ftiness/Context";
import { useContext, useState } from "react";
import BDNavbar from "../BodyBuildingPage/BDNavbar.tsx"

const BodyBuildingShop = () => {
    const {showededProduct, showProduct, dbCartProduct} = useContext(Shop)
    return (
        <div className="body">
            <BDNavbar />
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
