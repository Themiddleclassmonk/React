// Two way binding in forms 

import React from 'react'
import { useState } from 'react'



const App = () => {

  const [Name, setName] = useState("");

  console.log(Name)

  const PreventReload = (e) =>{
    e.preventDefault();
  }


  return (
    <>
      <form onSubmit={PreventReload}>
        <input
          onChange={(e) => {
    setName(e.target.value)
  }}
          type="text"
          placeholder="Name :"
          value={Name}
        />
        <button> Submit </button>
      </form>
    </>
  );
}

export default App
