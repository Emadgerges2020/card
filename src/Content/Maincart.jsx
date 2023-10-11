import React from "react";
import Cart from "./Cart";
import { BsFillMoonFill } from "react-icons/bs";


const Maincart = ({ data, increament, decreament, delBtn, empty,  reset,  changeBg, bg}) => {
  return (
    <div className={bg ? "bg-light text-center" : "bg-dark text-center"}>
      <h1 className="text-primary">Shop-Cart</h1>
      <div className="d-flex justify-content-evenly align-items-center mt-4 w-100">
        <button className={bg ? "ps-2 pe-2 btn btn-dark" : "ps-2 pe-2 btn btn-light"} onClick={reset}>Reset</button>
        <button className="ps-2 pe-2 btn btn-primary">Original</button>
        <button className="ps-2 pe-2 btn btn-danger" onClick={empty}>Empty</button>
        <button className={bg ? "bg-dark text-light" : "bg-light"} onClick={changeBg}>
          <BsFillMoonFill />
        </button>
      </div>
      {data.map((product) => (
        <Cart data={product} key={product.id} increament={increament} decreament={decreament} delBtn={delBtn}/>
      ))}
      <h1 className="text-primary">{data.length === 0 ? "Empty" : "Total Price:" + data.map((product) => product.price * product.count).reduce((a,b) => a + b)}</h1>
    </div>
  );
};

export default Maincart;
