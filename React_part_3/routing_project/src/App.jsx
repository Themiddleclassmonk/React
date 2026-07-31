
import { Routes , Route } from "react-router-dom"; 
import  Home  from "./components/Home";
import  Service  from "./components/Service";
import  Product from "./components/Product";
import About from "./components/About";
import Nav from "./components/Nav"


const App = () => {
  return (
      <div className=" w-screen h-screen bg-gray-800 p-10 text-white ">
        <Nav/>
        <Routes>
          <Route path = '/' element ={<Home/>}></Route>
          <Route path = '/About' element ={<About/>}></Route>
          <Route path = '/Product' element = {<Product/>}></Route>
          <Route path = '/Service' element = {<Service/>}></Route>
        </Routes>
      </div>
    
  );

}

export default App
