import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

const Service = () => {
  const navigate = useNavigate();
  const NavigateHandler = () => {
    navigate('/Service/details')
  }
  const UpdateHandler = () =>{
    navigate('/Service/update')
  }
  return (
    <div>
      <h1 className="text-3xl font-thin mb-5">Services</h1>
      <button
        onClick={NavigateHandler}
        className="bg-white text-black text-2xl rounded  py-2 px-4 mb-5 mr-5"
      >
        Service Details
      </button>
      <button
        onClick={UpdateHandler}
        className="bg-white text-black text-2xl rounded  py-2 px-4 mb-5"
      >
        Update Details
      </button>
      <hr />
      <Outlet />
    </div>
  );
}

export default Service
