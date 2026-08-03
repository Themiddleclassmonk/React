
import Routes from "./routes/Mainroutes";
import Nav from "./components/Nav"


const App = () => {
  return (
      <div className=" w-screen h-screen bg-gray-800 p-10 text-white  ">
        <Nav/>
        <Routes/>
      </div>
    
  );

}

export default App
