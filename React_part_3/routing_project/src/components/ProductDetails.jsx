import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const params = useParams()
  const navigate = useNavigate()
  const NavigateHandler =() =>{
    navigate(-1)
  }
  return (
    <div>
      Products
      <div className=" text-3xl font-thin mt-5 mb-5">{params.name} </div>
      <button
        onClick={NavigateHandler}
        className=" text-2xl text-black bg-white rounded py-2 px-4"
      >
       
        Go back
      </button>
    </div>
  );
}

export default ProductDetails
