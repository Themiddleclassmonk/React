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
    <>
      <Create todos={todos} settodos={settodos} />
      <Read todos={todos} settodos={settodos} />
    </>
  );
};

export default App;
