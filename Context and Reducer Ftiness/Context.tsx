import { createContext, useReducer } from "react";
import { fitnessReducer, initValue, intialValue, trainReducer } from "./Reducer";
import { trainingData } from "../BodyBuilding/BodyBuildingWorkouts/trainningData";
import { StaticImageData } from "next/image";

type prop = {
    children: React.ReactNode
}

type props = {
    showProduct: (product: any) => void,
    showededProduct: never[],
    removeFromShow: () => void,
    addAmount: (amount: number) => void,
    removeAmount: (amount: number) => (() => void) | undefined,
    amount: number,
    addToCart: (product: any, amount: any) => void,
    cartProducts: never[],
    total: number,
    removeFromCart: (prod: {
        product: {
            name: string;
        };
        amount: number;
    }) => void,
    dbCartProduct: never[],
    dbRemoveFromCart: (prod: {
        product: {
            name: string;
        };
        amount: number;
    }) => void,
    dbAddToCart: (product: any, amount: any) => void,
    dbTotal: number,
    showChestTrain: (showedTrain: any[]) => void,
    showAllTrain: (showedTrain: any[]) => void,
    showBicepsTrain: (showedTrain: any[]) => void,
    showedTrain: {
        name: string;
        muscle: string;
        image: StaticImageData;
        rate: number;
    }[],
    showLegTrain: (showedTrain: any[]) => void,
    showAbsTrain: (showedTrain: any[]) => void
}

export const Shop = createContext({} as props)

const FitnessProvider = ({children}: prop) => {
    const [fitnessState, fitnessDispatch] = useReducer(fitnessReducer, intialValue)
    const [trainState, trainDispatch] = useReducer(trainReducer, initValue)

    const showAllTrain = (showedTrain: any[]) => {
        removeAll(showedTrain)

        trainDispatch({
            type: "All",
            payload: trainingData
        })
    }

    const removeAll = (showedTrain: any[]) => {
        let filter = showedTrain.filter((train:{name:string}) => (
            train.name === "jhibsvwbdkhsbwvkbv"
        ))

        trainDispatch({
            type: "removeAll",
            payload: filter
        })
    }

    const showBicepsTrain = (showedTrain: any[]) => {
        removeAll(showedTrain)
        let copyShowedTrain = trainingData.filter((train: {muscle: string}) => (
            train.muscle === "Biceps"
        ))
        

        trainDispatch({
            type: "Biceps",
            payload: copyShowedTrain
        })
    }

    const showChestTrain = (showedTrain: any[]) => {
        removeAll(showedTrain)
        let copyShowedTrain = trainingData.filter((train:{muscle: string}) => (
            train.muscle === "Chest"
        ))

        trainDispatch({
            type: "Chest",
            payload: copyShowedTrain
        })
    }

    const showLegTrain = (showedTrain: any[]) => {
        removeAll(showedTrain)
        let copyShowedTrain = trainingData.filter((train: {muscle: string}) => (
            train.muscle === "Quads" || train.muscle === "Hams" || train.muscle === "Claf"
        ))

        trainDispatch({
            type: "Leg",
            payload: copyShowedTrain
        })
    }

    const showAbsTrain = (showedTrain: any[]) => {
        removeAll(showedTrain)
        let copyShowedTrain = trainingData.filter((train: {muscle: string}) => (
            train.muscle === "Abs"
        ))

        trainDispatch({
            type: "Abs",
            payload: copyShowedTrain
        })
    }

    const showProduct = (product: any) => {
        const updatedShowen = fitnessState.showededProduct
        updatedShowen.push(product)
        
        fitnessDispatch({
            type: "addToShow",
            payload: updatedShowen
        })
    }
    const removeFromShow = () => {
        const updatedShowen = fitnessState.showededProduct
        updatedShowen.pop()

        fitnessDispatch({
            type: "removeFromShow",
            payload: updatedShowen
        })
    }

    const addAmount = (amount: number) => {
        const updatedAmount = amount + 1

        fitnessDispatch({
            type: "addAmount",
            payload: updatedAmount
        })
    }

    const removeAmount = (amount: number) => {
        let updatedAmount = amount
        if(amount === 1){
            return removeFromShow()
        }else if (amount > 1) {
             updatedAmount = amount - 1
        }

        fitnessDispatch({
            type: "removeAmount",
            payload: updatedAmount
        })
    }

    const dbAddToCart = (product: any, amount: any) => {
        const updatedCart = fitnessState.dbCartProduct
        updatedCart.push({product: product, amount: amount})

        dbTotalPrice(updatedCart)
        removeFromShow()

        fitnessDispatch({
            type: "dbAddToCart",
            payload: updatedCart
        })
    }

    const dbRemoveFromCart = (prod:{product:{name: string}, amount: number}) => {
        const updatedCart = fitnessState.dbCartProduct.filter((product:{product:{name: string}, amount:number}) => (
            product.product.name !== prod.product.name
        ))

        dbTotalPrice(updatedCart)

        fitnessDispatch({
            type: "dbRemoveFromCart",
            payload: updatedCart
        })
    }

    const addToCart = (product: any, amount: any) => {
        const updatedCart = fitnessState.cartProducts;
        updatedCart.push({product: product, amount: amount})

        totalPrice(updatedCart)
        removeFromShow()

        fitnessDispatch({
            type: "addToCart",
            payload: updatedCart
        })
    }

    const removeFromCart = (prod: {product:{name: string}, amount: number}) => {
        const updatedCrat = fitnessState.cartProducts.filter((products:{product:{name: string}, amount: number}) => (
            products.product.name !== prod.product.name
        ))

        totalPrice(updatedCrat)

        fitnessDispatch({
            type: "removeFromCart",
            payload: updatedCrat
        })
    }

    const totalPrice = (cartProducts:{product:{price: number}, amount: number}[]) => {
        let total = 0;
        cartProducts.forEach((product) => (
            total += product.product.price * product.amount 
        ))

        fitnessDispatch({
            type: "TOTAL",
            payload: total
        })
    }

    const dbTotalPrice = (dbCartProduct:{product:{price:number}, amount: number}[]) => {
        let total = 0;
        dbCartProduct.forEach((prod)=> (
            total += prod.product.price * prod.amount
        ))

        fitnessDispatch({
            type: "dbTotal",
            payload: total
        })
    }

    const value = {
        showProduct,
        removeFromShow,
        addAmount,
        removeAmount,
        showededProduct: fitnessState.showededProduct,
        amount: fitnessState.amount,
        addToCart,
        cartProducts: fitnessState.cartProducts,
        total: fitnessState.total,
        removeFromCart,
        dbCartProduct: fitnessState.dbCartProduct,
        dbAddToCart,
        dbRemoveFromCart,
        dbTotal: fitnessState.dbTotal,
        showedTrain: trainState.showedTrain,
        showAllTrain,
        showBicepsTrain,
        showChestTrain,
        showLegTrain,
        showAbsTrain
    }

    return <Shop.Provider value={value}>{children}</Shop.Provider>
}
export default FitnessProvider;