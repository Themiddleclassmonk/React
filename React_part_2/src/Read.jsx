import { toast } from 'react-toastify'
import { todocontext } from './Wrapper';
import { useContext } from 'react';

const Read = () => {
  const [todos, settodos] = useContext(todocontext);

  const DeleteHandler = (id) => {
    const filteredtodos = todos.filter((todo) => todo.id != id);
    settodos(filteredtodos);
    toast.error("todo deleted !!");
  };

  const renedrTodos = todos.map((todo) => {
    return (
      <li
        className="mb-5 text-xl font-thin bg-gray-900 p-5 flex justify-between"
        key={todo.id}
      >
        {todo.title}{" "}
        <span
          className="text-red-400 font-semibold text-md"
          onClick={() => DeleteHandler(todo.id)}
        >
          Delete
        </span>
      </li>
    );
  });                             
  return (
    <div className="p-10  rounded-sm w-[40%] ">
      <h1 className="text-6xl font-thin pb-10 ">
        <span className="text-pink-400">Pending</span> Todos
      </h1>
      <ol>{renedrTodos}</ol>
    </div>
  );
};

export default Read;
