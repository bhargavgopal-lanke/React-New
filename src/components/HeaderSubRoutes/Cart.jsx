import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  
  const cartItems = useSelector((state) => state?.cartItemsInfo?.cartItems);

  return (
    <div className="body-sec">
      <div className="mb-3 text-2xl font-bold">Cart Page</div>
      <div
        className="block p-6 max-w-sm
            bg-white-600 rounded-lg 
            border border-grey-200 shadow-md"
      >
        <h1 className="mb-2 text-xl font-bold text-gray-900">Orders</h1>
        {cartItems &&
          cartItems.map((item) => {
            return (
              <p className="text-black" key={item.id}>
                {item.name} - {item.price}
              </p>
            );
          })}
      </div>
    </div>
  );
};

export default Cart;
