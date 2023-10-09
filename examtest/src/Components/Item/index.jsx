import React from "react";
import { CiDollar } from "react-icons/ci";
import { BsTrash } from "react-icons/bs";
export default function Item(props) {
  return (
    <tr key={props.index} class="border-b dark:border-neutral-500">
      <td class="whitespace  py-4 row-span-2">
        <input
          type="text"
          name=""
          id=""
          className="w-full border rounded-md px-2 p-1  bg-gray-100"
          placeholder="Item name"
        />
        <input
          type="text"
          name=""
          id=""
          className="w-full border rounded-md px-2 p-1 mt-1 bg-gray-100"
          placeholder="Item Description"
        />
      </td>
      <td class="whitespace px-5 py-4  ">
        <input
          type="number"
          className="w-14 border rounded-md px-2 p-1 mt-1 bg-gray-100 mb-10"
          value="1"
        />
      </td>
      <td class="whitespace  py-4  overflow-hidden">
        <div className="relative flex flex-nowrap items-stretch mb-10  ">
          <span
            className="flex items-center whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
            id="addon-wrapping"
          >
            <CiDollar />
          </span>
          <input
            type="number"
            className="relative m-0 block w-16 min-w-0  rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            defaultValue={1}
          />
        </div>
      </td>
      <td class="whitespace py-4 ">
        <button
          onClick={() => {
            props.handleDeleteRow(props.index);
          }}
          className="bg-red-600 p-2 border rounded-lg mb-10 mx-3"
        >
          <BsTrash />
        </button>
      </td>
    </tr>
  );
}
