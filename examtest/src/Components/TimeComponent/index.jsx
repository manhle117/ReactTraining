import React from "react";
import moment from "moment";
export default function TimeComponent(props) {
  const handleChangeDate = (e) => {
    const { name, value } = e.target;
    props.setDate((preState) => ({
      ...preState,
      [name]: value,
    }));
  };
  return (
    <>
      <div className="flex mb-10">
        <p className="flex ">
          <h3 className="font-bold mr-2">Date:</h3>
          {moment().format("L")}
        </p>
        <h3 className="font-bold ml-auto ">Due Date:</h3>
        <input
          type="date"
          className="border rounded-lg ml-2 px-2 py-1 bg-gray-200"
          name="date"
          value={props.date.date}
          onChange={handleChangeDate}
        />
      </div>
    </>
  );
}
