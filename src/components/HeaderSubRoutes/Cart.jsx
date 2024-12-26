import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { foodItems } = useSelector((state) => state?.cartItemsInfo);

  console.log("state", foodItems);

  return (
    <div>
      <div className="body-sec">Cart Page</div>
    </div>
  );
};

export default Cart;
