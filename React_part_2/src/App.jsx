// Two way binding in forms - Todo List part_1


import Create from "./Create";
import Read from "./Read";

const App = () => {
  

  return (
    <div className=" flex w-screen h-screen bg-gray-800 p-10 text-white ">
      <Create />
      <Read  />
    </div>
  );
};

export default App;
