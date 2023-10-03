import { trainingData } from "../BodyBuilding/BodyBuildingWorkouts/trainningData";

export const intialValue = {
    showededProduct: [],
    cartProducts: [],
    total: 0,
    amount: 1,
    dbCartProduct: [],
    dbTotal: 0
}

export const fitnessReducer = (fitnessState: any, action: { type: any; payload: any }) => {
    switch(action.type) {
        case "addToShow":
            return {
                ...fitnessState,
                showededProduct: action.payload, amount: 1
            }
            case "addAmount":
                return {
                 ...fitnessState,
                 amount: action.payload   
                }
                case "removeAmount": 
                return {
                    ...fitnessState,
                    amount: action.payload
                }
            case "removeFromShow":
                return {
                    ...fitnessState,
                    showededProduct: action.payload
                }
                case "addToCart":
                    return {
                        ...fitnessState,
                        cartProducts: action.payload
                    }
                    case "removeFromCart":
                        return {
                            ...fitnessState,
                            cartProducts: action.payload
                        }
                        case "dbAddToCart":
                            return {
                                ...fitnessState,
                                dbCartProduct: action.payload
                            }
                            case "dbRemoveFromCart":
                                return {
                                    ...fitnessState,
                                    dbCartProduct: action.payload
                                }
                                case "dbTotal":
                                    return {
                                        ...fitnessState,
                                        dbTotal: action.payload
                                    }
                        case "TOTAL":
                            return {
                                ...fitnessState,
                                total: action.payload
                            }
                            default: throw new Error ("Problem in FitnessReducer function")
    }
}

export const initValue = {
    showedTrain: trainingData
}

export const trainReducer= (trainState: any, action: {type: any, payload: any}) => {
    switch(action.type) {
        case "All":
            return {
                ...trainState,
                showedTrain: action.payload
            }
            case "removeAll":
                return {
                    ...trainState,
                    showedTrain: action.payload
                }
            case "Biceps":
                return {
                    ...trainState,
                    showedTrain: action.payload
                }
                case "Chest":
                    return {
                        ...trainState,
                        showedTrain: action.payload
                    }
                    case "Leg": 
                    return {
                        ...trainState,
                        showedTrain: action.payload
                    }
                    case "Abs":
                        return {
                            ...trainState,
                            showedTrain: action.payload
                        }
                    default: throw new Error("Problem in trainReducer")
    }
}