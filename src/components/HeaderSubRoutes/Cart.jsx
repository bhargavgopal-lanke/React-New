import React from "react";
import { useSelector } from "react-redux";
import store from "../../store";
import { clearCart } from "../../Slices/CartItems-Slice";
import { useNavigate } from "react-router";
import CategoryListItems from "../CategoryListItems";

const Cart = () => {
  const cartItems = useSelector((state) => state?.cart?.cartItems);

  const handleEmptyCart = () => {
    store.dispatch(clearCart());
  };

  const navigate = useNavigate();

  const goBack = () => {
    // going back to the previous page
    navigate(-1);
  };

  console.log("cartItems", cartItems);

  return (
    <div className="body-sec">
      <div className="mb-3 text-2xl font-bold">Cart Page</div>

      <div className="flex gap-5 my-5">
        <button
          className="block bg-blue-300 rounded-md p-3 my-3 text-md font-bold text-white w-2/12"
          onClick={goBack}
        >
          List Items
        </button>
        <button
          type="button"
          className="bg-red-300 rounded-md p-3 my-3 text-md font-bold text-white w-2/12"
          onClick={handleEmptyCart}
        >
          Empty Cart
        </button>
      </div>
      <div
        className="block p-6 w-full
            bg-white-600 rounded-lg 
            border border-grey-200 shadow-md mb-6"
      >
        <h1 className="mb-2 text-xl font-bold text-gray-900">Orders</h1>
        {<CategoryListItems data={cartItems} />}
      </div>
    </div>
  );
};

export default Cart;
