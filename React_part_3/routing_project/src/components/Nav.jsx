import React from 'react'
import {  NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="flex justify-center gap-10 m-5 p-5">
      <NavLink className={(e) => (e.isActive ? "text-red-600" : "")} to="/">Home</NavLink>
      <NavLink className={(e) => (e.isActive ? "text-red-600" : "")} to="/Product">Product</NavLink>
      <NavLink className={(e) => (e.isActive ? "text-red-600" : "")} to="/Service">Service</NavLink>
      <NavLink className={(e) => (e.isActive ? "text-red-600" : "")} to="/About">About</NavLink>
    </div>
  );
}

export default Nav
