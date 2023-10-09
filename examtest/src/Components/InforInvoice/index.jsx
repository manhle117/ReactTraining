import React from "react";

export default function InforInvoice(props) {
  const handleChangeBillTo = (event) => {
    const { name, value } = event.target;
    props.setBillToForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleChangeBillFrom = (event) => {
    const { name, value } = event.target;
    props.setBillFromForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="grid grid-cols-6 gap-5 mt-6 mb-5">
        <div className="col-span-3">
          <label htmlFor="" className="font-bold">
            Bill to:
          </label>
          <input
            type="text"
            name="billTo"
            value={props.billToForm.billTo}
            onChange={handleChangeBillTo}
            className="w-full border rounded-md px-2 p-1 mt-4 bg-gray-100"
            placeholder="who is this invoice to ?"
            required
          />
          <input
            type="email"
            name="emailTo"
            value={props.billToForm.emailTo}
            onChange={handleChangeBillTo}
            className="w-full border rounded-md px-2 p-1 mt-4 bg-gray-100"
            placeholder="Email address"
            required
          />
          <input
            type="text"
            name="addressTo"
            value={props.billToForm.addressTo}
            onChange={handleChangeBillTo}
            className="w-full border rounded-md px-2 p-1 mt-4 bg-gray-100"
            placeholder="Billing address"
            required
          />
        </div>
        <div className="col-span-3">
          <label htmlFor="" className="font-bold">
            Bill from:
          </label>
          <input
            type="text"
            name="billFrom"
            value={props.billFromForm.billFrom}
            onChange={handleChangeBillFrom}
            className="w-full border rounded-md px-2 p-1 mt-4 bg-gray-100"
            placeholder="who is this invoice from ?"
            required
          />
          <input
            type="email"
            name="emailFrom"
            value={props.billFromForm.emailFrom}
            onChange={handleChangeBillFrom}
            className="w-full border rounded-md px-2 p-1 mt-4 bg-gray-100"
            placeholder="Email address"
            required
          />
          <input
            type="text"
            name="addressFrom"
            value={props.billFromForm.addressFrom}
            onChange={handleChangeBillFrom}
            className="w-full border rounded-md px-2 p-1 mt-4 bg-gray-100"
            placeholder="Billing address"
            required
          />
        </div>
      </div>
    </>
  );
}
