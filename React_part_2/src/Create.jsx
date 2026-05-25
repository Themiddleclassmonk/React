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
    <div className=" w-[60%] p-10 ">
      <h1 className="text-6xl font-thin ">
        Two way <span className='text-red-400'>Binding</span> - Todo list .
      </h1>
      <form onSubmit={SubmitHandler}>
        <br />
        <br />
        <input
          className="border-b text-thin text-2xl w-full p-2 mb-5"
          onChange={(e) => {
            settitle(e.target.value);
          }}
          type="text"
          placeholder="Title"
          value={title}
        />
        <button className="border text-thin text-xl p-2 rounded-md">
          Create Todo
        </button>
      </form>
    </div>
  );
}

export default Create
