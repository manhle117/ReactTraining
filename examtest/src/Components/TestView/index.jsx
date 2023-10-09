import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { Modal, Ripple, initTE } from "tw-elements";
initTE({ Modal, Ripple });

function Home() {
  return (
    <div className="container mx-auto pt-10 pb-10">
      <div className="grid grid-cols-8 gap-4">
        <div className="col-span-6 bg-white p-6 rounded-lg">
          <div className="flex">
            <p className="flex">
              <h3 className="font-bold">Date:</h3> 20/05/2023
            </p>
            <h3 className="font-bold ml-auto pt-1 pr-1">Due Date:</h3>
            <input
              type="date"
              id="name"
              className="border rounded-lg px-2 py-1"
            />
          </div>
          <div className="border-b border-gray-300 mt-11"></div>
          <div className="grid grid-cols-6 gap-5 mt-5">
            <div className="col-span-3">
              {" "}
              <h3 className="font-bold">Bill to:</h3>
              <input
                type="text"
                className="w-full border rounded-lg px-2 py-3 mt-4 bg-gray-100"
                placeholder="Who is this invoice to ?"
              />
              <input
                type="text"
                className="w-full border rounded-lg px-2 py-3 mt-3  bg-gray-100"
                placeholder="Email address"
              />
              <input
                type="text"
                className="w-full border rounded-lg px-2 py-3 mt-3  bg-gray-100"
                placeholder="Billing address"
              />
            </div>
            <div className="col-span-3">
              <h3 className="font-bold">Bill from:</h3>
              <input
                type="text"
                className="w-full border rounded-lg px-2 py-3 mt-4 bg-gray-100"
                placeholder="Who is this invoice from ?"
              />
              <input
                type="text"
                className="w-full border rounded-lg px-2 py-3 mt-3  bg-gray-100"
                placeholder="Email address"
              />
              <input
                type="text"
                className="w-full border rounded-lg px-2 py-3 mt-3  bg-gray-100"
                placeholder="Billing address"
              />
            </div>
          </div>
          <div className="border-b border-gray-300 mt-14"></div>
          {/* table */}
          <div className="bg-white rounded">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="border-b-2 border-gray-300 py-2 w-3/5 text-left">
                    ITEM
                  </th>
                  <th className="border-b-2 border-gray-300 py-2 text-left">
                    QTY
                  </th>
                  <th className="border-b-2 border-gray-300 py-2 text-left">
                    PRICE/RATE
                  </th>
                  <th className="border-b-2 border-gray-300 py-2 text-left">
                    ACTION
</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-2">
                    <input
                      type="text"
                      placeholder="Product name"
                      className="border rounded-lg px-2 py-2 w-full bg-gray-100"
                    />
                    <input
                      type="text"
                      placeholder="Product name"
                      className="border rounded-lg px-2 py-2 w-full mt-2 bg-gray-100"
                    />
                  </td>
                  <td className="py-2">
                    <input
                      type="number"
                      className="border rounded-lg px-2 py-2 w-24 ml-2 mb-12 bg-gray-100"
                      value="1"
                    />
                  </td>
                  <td className="py-2">
                    <input
                      type="number"
                      className="border rounded-lg px-2 py-2 w-36 mb-12 bg-gray-100"
                      value="1.00"
                    />
                  </td>
                  <td className="py-2">
                    <button className="text-black-500 mb-12 bg-red-600 w-10 h-10 rounded-lg">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth={0}
                        viewBox="0 0 24 24"
                        className="text-white mt-1 btn btn-danger"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ height: 33, width: 33, padding: "7.5px" }}
                      >
                        <path
                          fill="none"
                          d="M17.004 20L17.003 8h-1-8-1v12H17.004zM13.003 10h2v8h-2V10zM9.003 10h2v8h-2V10zM9.003 4H15.003V6H9.003z"
                        />
                        <path d="M5.003,20c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2V8h2V6h-3h-1V4c0-1.103-0.897-2-2-2h-6c-1.103,0-2,0.897-2,2v2h-1h-3 v2h2V20z M9.003,4h6v2h-6V4z M8.003,8h8h1l0.001,12H7.003V8H8.003z" />
                        <path d="M9.003 10H11.003V18H9.003zM13.003 10H15.003V18H13.003z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-4 mt-2">
            <h2 className="font-bold">Add item</h2>
          </button>
          <div className="grid grid-cols-6 gap-5 mt-5">
            <div className="col-span-3"></div>
            <div className="col-span-3">
              <div className="flex">
                <h1 className="font-bold">Subtotal: </h1>
                <label className="ml-auto">$1</label>
              </div>