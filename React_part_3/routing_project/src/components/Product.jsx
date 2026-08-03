import React from 'react'
import ProductDetails from "./ProductDetails";
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const navigate = useNavigate();
  const NavigateHandler = (name) => {
    navigate(`/Product/details/${name}`)
  }
  return (
    <div>
      <h1 className="text-3xl font-thin mb-5">Products</h1>
      <div>
        <h1 className="text-2xl font-thin mb-5">Product 1</h1>
        <button
          onClick={() => NavigateHandler("Product 1")}
          className="bg-white text-black text-2xl rounded  py-2 px-4 mb-5"
        >
          Details
        </button>
      </div>
      <div>
        <h1 className="text-2xl font-thin mb-5">Product 2</h1>
        <button
          onClick={() => NavigateHandler("Product 2")}
          className="bg-white text-black text-2xl rounded  py-2 px-4 mb-5"
        >
          Details
        </button>
      </div>

      <div>
        <h1 className="text-2xl font-thin mb-5">Product 3</h1>
        <button
          onClick={() => NavigateHandler("Product 3")}
          className="bg-white text-black text-2xl rounded  py-2 px-4 mb-5"
        >
          Details
        </button>
      </div>
      {/* <ProductDetails /> */}
    </div>
  );
}

export default Product
