"use client"
import MainPage from './components/MainPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import FitnessPage from './Fitness/FitnessPage/FitnessPage'
import BodyBuilding from './BodyBuilding/BodyBuildingPage/BodyBuildingPage'
import FitnessShop from './Fitness/FitnessShop/FitnessShop';
import SingleFitnessProduct from './Fitness/FitnessShop/SingleFitnessProduct';
import FitnessProvider from './Context and Reducer Ftiness/Context';
import CartPage from './Fitness/CartPage/CartPage';
import Workout from './Fitness/Workout/Workout';
import Coach from './Fitness/Coaches/Coach';
import BodyBuildingShop from './BodyBuilding/BodyBuildingShop/BodyBuildingShop';
import BDProduct from './BodyBuilding/BodyBuildingShop/Product';
import BDCart from './BodyBuilding/BodyBuildingCart/BodyBuildingCart';
import BDCoaches from './BodyBuilding/BodyBuildingCoaches/BodyBuildingCoaches';
import BDWorkout from './BodyBuilding/BodyBuildingWorkouts/BodyBuildingWorkout';

export default function Home() {
  return (
    <FitnessProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Fitness" element={<FitnessPage />} />
      <Route path="/BodyBuilding" element={<BodyBuilding />} />
      <Route path="/Fitness/Shop" element={<FitnessShop />} />
      <Route path="/Fitness/Shop/FitnessProduct" element={<SingleFitnessProduct />} />
      <Route path="/Fitness/Cart" element={<CartPage />} />
      <Route path="/Fitness/Workout" element={<Workout />} />
      <Route path="/Fitness/Coaches" element={<Coach/>} />
      <Route path="/BodyBuilding/Shop" element={<BodyBuildingShop />} />
      <Route path="/BodyBuilding/Product" element={<BDProduct />} />
      <Route path="/BodyBuilding/Cart" element={<BDCart />} />
      <Route path="/BodyBuilding/Coaches" element={<BDCoaches />} />
      <Route path="/BodyBuilding/Workout" element={<BDWorkout />} /> 
    </Routes>
    </BrowserRouter>
    </FitnessProvider>
  )
}
