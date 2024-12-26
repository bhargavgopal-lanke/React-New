import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const { name, price } = useSelector((state) => state?.cartItemsInfo);

  console.log("state", name);
  console.log("state", price);

  return (
    <div>
      <div className="body-sec">Cart Page</div>
    </div>
  );
};

export default Cart;
