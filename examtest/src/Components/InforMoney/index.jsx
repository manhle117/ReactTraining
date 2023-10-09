import React from "react";
import LineBreak from "../LineBreak";

export default function InforMoney({ taxAndDiscount, itemRow,currency }) {
  const subTotal = itemRow.reduce((accumulator, item) => accumulator + item.qty * item.price, 0)
  let total = subTotal + subTotal*taxAndDiscount.tax/100 - subTotal*taxAndDiscount.discount/100
  return (
    <div className="mr-auto">
      <p className="flex">
        <h3 className="font-bold">Subtotal: </h3>
        <p className="ml-auto mr-2">{currency} {subTotal}</p>
      </p>
      <p className="flex mt-2">
        <h3 className="font-bold">Discount: </h3>
        <p className="ml-auto mr-2">{currency} {taxAndDiscount.discount}</p>
      </p>
      <p className="flex mt-2 mb-2">
        <h3 className="font-bold">Tax: </h3>
        <p className="ml-auto mr-2">{currency} {taxAndDiscount.tax }</p>
      </p>
      <LineBreak />
      <p className="flex mt-2 mb-2">
        <h3 className="font-bold">Total: </h3>
        <p className="ml-auto mr-2 font-bold">{currency} {total}</p>
      </p>
    </div>
  );
}
