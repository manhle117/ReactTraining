import React from "react";

export default function Note(props) {
  const handleChangeNote = (e) =>{
    const {name,value} = e.target
    props.setNote((preState)=>({
      ...preState,
      [name]:value
    }))
  }
  return (
    <div className="mt-5 ">
      <h3 className="mt-4 font-bold">Note: </h3>
      <input
        type="text"
        name="note"
        value={props.note.note}
        onChange={handleChangeNote}
        className="w-full border rounded-md px-2 p-1 mt-4 bg-gray-100"
        placeholder="Note"
      />
    </div>
  );
}
