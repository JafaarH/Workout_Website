import gatio from "./images/gatio.jpg"
import tshirt from "./images/tshirt.jpg"
import short from "./images/short.jpg"
import waterbottle from "./images/waterbottle.jpg"
import runningdevice from "./images/runningdevice.jpg"
import yoga from "./images/yoga.jpg"
import hiyb from "./images/hiyb.jpg"
import deviceL from "./images/deviceL.jpg"
import cycle from "./images/cycle.jpg"
import twoproducts from "./images/twoproducts.jpg"
import imm from "./images/imm.jpg"
import { StaticImageData } from "next/image"

type props = {
    name: string,
    price: number,
    image: StaticImageData,
    description: string,
    qty: number
} 

export const FitnessStoreData: props[] = [{
    name: "GatoR",
    price: 5,
    image: gatio,
    description: "A brand of noncarbonated sports drink designed to supply the body with carbohydrates and replace fluids and sodium lost during exertion.",
    qty: 1
},
{
    name: "Men T-Shirt",
    price: 20,
    image: tshirt,
    description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
    qty: 1
},
{
    name: "Men Short",
    price: 20,
    image: short,
    description: "A garment worn over the pelvic area, circling the waist and splitting to cover the upper part of the legs, sometimes extending down to the knees but not covering the entire length of the leg.",
    qty: 1
},
{
    name: "Water Bottle",
    price: 10,
    image: waterbottle,
    description: " A container that is used to hold liquids, mainly water, for the purpose of transporting a drink while travelling or while otherwise away from a supply of potable water.",
    qty: 1
},
{
    name: "Yoga Mat",
    price: 30,
    image: yoga,
    description: "specially fabricated mats used to prevent hands and feet slipping during asana practice in modern yoga as exercise.",
    qty: 1
},
{
    name: "Women dress",
    price: 35,
    image: hiyb,
    description: " These fabrics are made of synthetic materials that offer more flexibility and responsiveness to your body than natural fibers. ",
    qty: 1
},
{
    name: "Full Outfit for Women",
    price: 50,
    image: imm,
    description: "Looking the part is as important as the workout itself; their dress code is like a motivational warm up and wearing a complete outfit gives them that extra edge to perform a killer workout.",
    qty: 1
},
{
    name: "Treadmill",
    price: 150,
    image: runningdevice,
    description: "You can start jogging or running at any time.  With the right running equipment, you can easily keep fit. Good equipment makes it possible to do these sports all year round.",
    qty: 1
},
{
    name: "C Console",
    price: 100,
    image: deviceL,
    description: "You can start jogging or running at any time.  With the right running equipment, you can easily keep fit. Good equipment makes it possible to do these sports all year round.",
    qty: 1
},
{
    name: "Cycle",
    price: 120,
    image: cycle,
    description: "device used as exercise equipment for indoor cycling. Exercise bikes are used for exercise, to increase general fitness, for weight loss, and for training for cycle events.",
    qty: 1
},
{
    name: "Running and Cycle devices",
    price: 200,
    image: twoproducts,
    description: "Two products in the same package for 200 dollars. Very good choice if you want to loss much weight",
    qty: 1
}
]