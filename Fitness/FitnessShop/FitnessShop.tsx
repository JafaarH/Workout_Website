import { Badge, Button, Container, Dropdown, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./FitnessShopStyle.css"
import { FitnessStoreData } from "@/app/FitnessStoreData";
import Image, { StaticImageData } from "next/image";
import SingleFitnessProduct from "./SingleFitnessProduct";
import { useContext, useState } from "react";
import { Shop } from "@/app/Context and Reducer Ftiness/Context";
import FitnessNavbar from "../FitnessPage/FitnessNavbar.tsx"


const FitnessShop =() =>{
  const {showProduct, cartProducts} = useContext(Shop)
 
    return (
        <div>
            <div>
            <FitnessNavbar />
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
