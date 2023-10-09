import React, { useState } from "react";
import LineBreak from "../LineBreak";
import InvoiceModal from "../InvoiceModal";

export default function RightSide(props) {
  const {
    date,
    billToForm,
    itemRow,
    billFromForm,
    showModal,
    setShowModal,
    taxAndDiscount,
    setTaxAndDiscount,
  } = props;

  const handleChangTaxAndDis = (e) => {
    const { name, value } = e.target;
    setTaxAndDiscount((preState) => ({
      ...preState,
      [name]: value,
    }));
  };
  return (
    <div className="sticky top-6 col-span-2">
      <button
        type="submit"
        className="inline-block w-full rounded mb-10 bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      >
        Review Invoice
      </button>
      <InvoiceModal
        date={date}
        billToForm={billToForm}
        itemRow={itemRow}
        billFromForm={billFromForm}
        showModal={showModal}
        setShowModal={setShowModal}
        taxAndDiscount={taxAndDiscount}
        setTaxAndDiscount={setTaxAndDiscount}
      />
      <LineBreak />
      <h3 className="mt-3 font-bold">Currency: </h3>
      <select className="border rounded-md mt-1 w-full text-center font-medium px-2 py-2">
        <option value="VND">VND (VietNamDong)</option>
        <option value="USD">USD (US Dollars)</option>
        <option value="YEN">YEN (JapanYen)</option>
      </select>
      <h3 className="mt-3 font-bold">Tax Rate: </h3>
      <div className="relative flex flex-wrap items-stretch">
        <input
          type="number"
          name="tax"
          value={taxAndDiscount.tax}
          onChange={handleChangTaxAndDis}
          className="relative m-0 bg-white -ml-px block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="0.0"
        />
        <span className="flex items-center bg-gray-50 whitespace-nowrap rounded-r border border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200">
          %
        </span>
      </div>
      <h3 className="mt-3 font-bold">Discount Rate: </h3>
      <div className="relative flex flex-wrap items-stretch">
        <input
          type="number"
          name="discount"
          value={taxAndDiscount.discount}
          onChange={handleChangTaxAndDis}
          className="relative m-0 bg-white -ml-px block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          placeholder="0.0"
        />
        <span className="flex items-center bg-gray-50 whitespace-nowrap rounded-r border border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200">
          %
        </span>
      </div>
    </div>
  );
}
