import React from 'react'
import { Route,Routes } from 'react-router-dom';
import About from '../components/About'
import Home from "../components/Home";
import Product from "../components/Product";
import Service from "../components/Service";
import ProductDetails from './../components/ProductDetails';
import Servicedetails from './../components/Servicedetails';
import Serviceudate from '../components/Serviceudate';

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Product" element={<Product />}></Route>
      <Route path="/Product/details/:name" element={<ProductDetails />}></Route>
      <Route path="/Service" element={<Service />}>
        <Route path="/Service/details" element={<Servicedetails />}></Route>
        <Route path="/Service/update" element={<Serviceudate />}></Route>
      </Route>
    </Routes>
  );
}

export default Mainroutes
