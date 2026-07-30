import { createContext } from "react";
import { nanoid } from "nanoid";
import { useState } from "react";

export const todocontext = createContext(null)

const Wrapper = (props) => {
    const [todos, settodos] = useState([
      {
        id: nanoid(),
        title: "Demo task",
        isCompleted: false,
      },
    ]);
  return (
    <todocontext.Provider value={[todos, settodos]}>
      {props.children}
    </todocontext.Provider>
  );
}

export default Wrapper
