import React, { useContext } from 'react'
import { nanoid } from 'nanoid';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify"
import { todocontext } from './Wrapper';

const Create = () => {

  const [todos, settodos] = useContext(todocontext);
 


    const {register,handleSubmit ,reset , formState:{errors}} = useForm()
    
    const SubmitHandler = (data) => {
      data.isCompleted = false ;
      data.id = nanoid();

      const copytodos = [...todos];
      copytodos.push(data);
      settodos(copytodos);

      toast.success("task created");

      reset();
    };
  return (
    <div className=" w-[60%] p-10 ">
      <h1 className="text-6xl font-thin ">
        Two way <span className="text-red-400">Binding</span> - Todo list .
      </h1>
      <form onSubmit={handleSubmit(SubmitHandler)}>
        <br />
        <br />
        <input
          {...register("title", { required: "title can not be empty !" })}
          className="border-b text-thin text-2xl w-full p-2 mb-5"
          type="text"
          placeholder="Title"
        />
        <small className="font-thin text-red-400">
          {errors?.title?.message}
        </small>
        <br /> 
        
        <button className="border text-thin text-xl p-2 rounded-md">
          Create Todo
        </button>
      </form>
    </div>
  );
}

export default Create
