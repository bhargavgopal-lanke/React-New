import React from "react";
import { useSelector } from "react-redux";
import store from "../../store";
import { clearCart } from "../../Slices/CartItems-Slice";

const Cart = () => {
  const cartItems = useSelector((state) => state?.cartItemsInfo?.cartItems);

  const handleEmptyCart = () => {
    store.dispatch(clearCart());
  };

  return (
    <div className="body-sec">
      <div className="mb-3 text-2xl font-bold">Cart Page</div>

      <button type="button" className="" onClick={handleEmptyCart}>
        Empty Cart
      </button>

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
