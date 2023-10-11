import React, { useEffect } from "react";
import "../Content/cart.css";


const Cart = ({data, increament, decreament, delBtn}) => {
  useEffect(()=>{
    setTimeout(()=>{
      console.log("item deleted");
    },100)
  },[])

  return (
      <div className="data w-100 d-flex justify-content-evenly mt-4 bg-secondary pt-2 pb-2">
        <span className="text-light fw-bold">{data.name}</span>
        <span className="text-light">Price: {data.price}</span>
        <span className="text-light">Items: {data.count}</span>
        <button className="bg-success pt-1 pb-1 pe-2 ps-2" onClick={()=> increament(data)}>+</button>
        <button className="bg-warning pt-1 pb-1 pe-2 ps-2" onClick={()=> decreament(data)}>-</button>
        <button className="bg-danger pt-1 pb-1 pe-2 ps-2" onClick={()=> delBtn(data)}>Del</button>
        <span className="text-light">Total: {data.price * data.count}</span>
      </div>
  );
};

export default Cart;
