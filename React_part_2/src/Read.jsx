import React from 'react'
import { useState } from 'react';

const Read = (props) => {

    const todos = props.todos;
    const settodoos = props.settodos;

    const renedrTodos = todos.map((todo) => {
      return <li key={todo.id}>{todo.title}</li>;
    });
  return (
    <>
      <hr />
      <br />
      <br />
      <h1>pending todos</h1>
      <ol>{renedrTodos}</ol>
    </>
  );
}

export default Read
