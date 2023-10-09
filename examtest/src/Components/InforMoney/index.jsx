import React from "react";
import LineBreak from "../LineBreak";

export default function InforMoney() {
  return (
    <div className="mr-auto">
      <p className="flex">
        <h3 className="font-bold">Subtotal: </h3>
        <p className="ml-auto mr-2">1.00</p>
      </p>
      <p className="flex mt-2">
        <h3 className="font-bold">Discount: </h3>
        <p className="ml-auto mr-2">1.00</p>
      </p>
      <p className="flex mt-2 mb-2">
        <h3 className="font-bold">Tax: </h3>
        <p className="ml-auto mr-2">1.00</p>
      </p>
      <LineBreak />
      <p className="flex mt-2 mb-2">
        <h3 className="font-bold">Total: </h3>
        <p className="ml-auto mr-2 font-bold">1.00</p>
      </p>
    </div>
  );
}
