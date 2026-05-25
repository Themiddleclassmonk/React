// Two way binding in forms - Todo List part_1

import { nanoid } from "nanoid";
import { useState } from "react";
import Create from "./Create";
import Read from "./Read";

const App = () => {
  const [todos, settodos] = useState([
    {
      id: nanoid(),
      title: "Demo task",
      isCompleted: false,
    },
  ]);

  return (
    <div className=" flex w-screen h-screen bg-gray-800 p-10 text-white ">
      <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos} />
    </div>
  );
};

export default App;
