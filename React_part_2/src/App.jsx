// Two way binding in forms - check boxes and radio  

import React from 'react'
import { useState } from 'react';

const App = () => {

  const PreventReload = (e) =>{
    e.preventDefault();
  }

  const [completed, setcompleted] = useState(true);
  const [Gender, setGender] = useState("Male")
  return (
    <>
      <h1>Two way binding - check boxes and radio buttons .</h1>
      <form onSubmit={PreventReload}>
        <input
          value="Male"
          onChange={(e) => {
            setGender(e.target.value);
          }}
          type="radio"
          checked ={Gender == "Male" && true}
        />
        Male
        <br />
        <br />
        <input
          value="Female"
          onChange={(e) => {
            setGender(e.target.value);
          }}
          type="radio"
          checked = {Gender == "Female" && true}
        />
        Female
        <br />
        <br />
        <input
          checked = {completed}
          onChange={(e) => {
            setcompleted(e.target.checked);
          }}
          type="checkbox"
        />
        completed
        <br />
        <br />
        <button> submit </button>
      </form>
    </>
  );
}

export default App

