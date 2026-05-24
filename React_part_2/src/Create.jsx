import React from 'react'
import { nanoid } from 'nanoid';
import { useState } from "react";

const Create = (props) => {

    const todos = props.todos;
    const settodos = props.settodos;

    const [title, settitle] = useState("");
    const SubmitHandler = (e) => {
      e.preventDefault();
      const newtodo = {
        id: nanoid(),
        title: title,
        isCompleted: false,
      };
      console.log(newtodo);
      settodos([...todos, newtodo]);
      settitle("");
    };
  return (
    <>
      <h1>Two way binding - TOdo list .</h1>
      <form onSubmit={SubmitHandler}>
        <br />
        <br />
        <input
          onChange={(e) => {
            settitle(e.target.value);
          }}
          type="text"
          placeholder="title"
          value={title}
        />
        <button> submit </button>
      </form>
    </>
  );
}

export default Create
