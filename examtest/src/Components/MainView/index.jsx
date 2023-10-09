import React, { useState } from "react";
import InforInvoice from "../InforInvoice";
import LineBreak from "../LineBreak";
import TableItem from "../TableItem";
import TimeComponent from "../TimeComponent";
import RightSide from "../RightSide";
import InforMoney from "../InforMoney";
import Note from "../NoteInvoice";

export default function MainView() {
  const [initItem, setInitItem] = useState({
    productName: "",
    desc: "",
    qty: 0,
    price: 0.0,
  });
  const [itemRow, setItemRow] = useState([initItem]);
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState({ date: "" });

  const [initBillTo, setInitBillTo] = useState({
    billTo: "",
    emailTo: "",
    addressTo: "",
  });
  const [billToForm, setBillToForm] = useState(initBillTo);
  const [initBillFrom, setInitBillFrom] = useState({
    billFrom: "",
    emailFrom: "",
    addressFrom: "",
  });
  const [billFromForm, setBillFromForm] = useState(initBillFrom);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleAddRow = () => {
    setItemRow([
      ...itemRow,
      {
        productName: "",
        desc: "",
        qty: 0,
        price: 0.0,
      },
    ]);
  };
  const [taxAndDiscount, setTaxAndDiscount] = useState({
    tax: 0.0,
    discount: 0.0,
  });
  const handleDeleteRow = (index) => {
    const updateTable = [...itemRow];
    updateTable.splice(index, 1);
    setItemRow(updateTable);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="container mx-auto px-16 py-6 bg-gray-200">
        <div className="grid grid-cols-8 gap-4">
          <div className="col-span-6 bg-white rounded-xl border border- p-10">
            <TimeComponent date={date} setDate={setDate} />
            <LineBreak />
            <InforInvoice
              billToForm={billToForm}
              setBillToForm={setBillToForm}
              setInitBillTo={setInitBillTo}
              billFromForm={billFromForm}
              setBillFromForm={setBillFromForm}
            />
            <LineBreak />
            <TableItem
              setItemRow={setItemRow}
              itemRow={itemRow}
              handleDeleteRow={handleDeleteRow}
              initItem={initItem}
              setInitItem={setInitItem}
            />
            <button
              onClick={handleAddRow}
              type="button"
              className=" bg-blue-600 text-white px-2 py-2 mt-2 font-bold border rounded-lg "
            >
              Add item
            </button>
            <div className="grid grid-cols-6 gap-5">
              <div className="col-span-3"></div>
              <div className="col-span-3">
                <InforMoney />
              </div>
            </div>
            <LineBreak />
            <Note />
          </div>
          <div className="col-span-2 ">
            <RightSide
              date={date}
              billToForm={billToForm}
              itemRow={itemRow}
              billFromForm={billFromForm}
              showModal={showModal}
              setShowModal={setShowModal}
              taxAndDiscount={taxAndDiscount}
              setTaxAndDiscount={setTaxAndDiscount}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
