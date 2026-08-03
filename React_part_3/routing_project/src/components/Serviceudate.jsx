import React from 'react'
import { useNavigate } from 'react-router-dom';

const Serviceudate = () => {
    const navigate = useNavigate();
    const NavigateHandler = () =>{
        navigate(-1);
    }
  return (
    <div>
      <div className=" text-3xl font-thin mt-5 mb-5">Services Update</div>
      <button
        onClick={NavigateHandler}
        className=" text-2xl text-black bg-white rounded py-2 px-4"
      >
        Go back
      </button>
    </div>
  );
}

export default Serviceudate
