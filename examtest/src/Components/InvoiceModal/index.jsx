import React from "react";
import { usePDF } from "react-to-pdf";
export default function InvoiceModal(props) {
  const {
    date,
    billToForm,
    itemRow,
    billFromForm,
    taxAndDiscount,
    setTaxAndDiscount,
  } = props;
  const { toPDF, targetRef } = usePDF({ filename: "page.pdf" });
  return (
    <>
      {props.showModal ? (
        <>
          <div
            className="justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            onClick={() => props.setShowModal(false)}
          >
            <div className="w-3/4  bg-white rounded-xl overflow-hidden">
              <div className="modal-content text-sm ">
                <div id="invoiceCapture" ref={targetRef}>
                  <div className="bg-gray-100 p-4 flex justify-between items-start">
                    <div className="w-3/4">
                      <h4 className="font-bold my-2">adf</h4>
                      <h6 className="font-bold text-secondary mb-1">
                        Invoice #: 1
                      </h6>
                    </div>
                    <div className="text-end">
                      <h6 className="font-bold mt-1 mb-2">Amount Due:</h6>
                      <h5 className="font-bold text-secondary">$ 1</h5>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="col-span-1">
                        <div className="font-bold">Billed to:</div>
                        <div>{billToForm.billTo}</div>
                        <div>{billToForm.emailTo}</div>
                        <div>{billToForm.addressTo}</div>
                      </div>
                      <div className="col-span-1">
                        <div className="font-bold">Billed From:</div>
                        <div>{billFromForm.billFrom}</div>
                        <div>{billFromForm.emailFrom}</div>
                        <div>{billFromForm.addressFrom}</div>
                      </div>
                      <div className="col-span-1">
                        <div className="font-bold mt-2">Date Of Issue:</div>
                        <div>{date.date}</div>
                      </div>
                    </div>

                    <table className="mb-0 table w-full">
                      <thead className="border-b">
                        <tr className="border-t-2 border-gray-200">
                          <th className="py-2 text-start w-1/12">QTY</th>
                          <th className="text-start">DESCRIPTION</th>
                          <th className="text-end w-2/12">PRICE</th>
                          <th className="text-end w-2/12">AMOUNT</th>
                        </tr>
                      </thead>
                      <tbody>
                        {itemRow.map((item, index) => {
                          return (
                            <>
                              <tr className="border-b">
                                <td className="py-2">{item.qty}</td>
                                <td>
                                  {item.productName}-{item.desc}
                                </td>
                                <td className="text-end">{item.price}</td>
                                <td className="text-end">$ 1</td>
                              </tr>
                            </>
                          );
                        })}
                        <tr className="text-end border-b">
                          <td className="font-bold py-2" colSpan={3}>
                            SUBTOTAL
                          </td>
                          <td>$ 1.00</td>
                        </tr>
                        <tr className="text-end border-b">
                          <td className="font-bold py-2" colSpan={3}>
                            TOTAL
                          </td>
                          <td>$ 1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="pb-4 pt-6 px-4">
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => toPDF()}
                      className="py-3 px-4 bg-blue-600 text-white rounded-lg overflow-hidden flex items-center justify-center hover:bg-blue-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="me-2"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.293 5.293a1 1 0 011.414 0L8 8.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        />
                      </svg>
                      Send Invoice
                    </button>
                    <button
                      onClick={() => toPDF()}
                      className="py-3 px-4 border-2 border-blue-600 text-blue-600 rounded-lg overflow-hidden flex items-center justify-center hover:bg-blue-600 hover:text-white"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="me-2"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.293 5.293a1 1 0 011.414 0L8 8.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        />
                      </svg>
                      Download Copy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
