import React from "react";

const ManageProductData = ({id, title, price}) => {
  return (
    <tr>
      <td className="border border-slate-300 p-4 "> {id}. </td>
      <td className="border border-slate-300 p-4 "> {title} </td>
      <td className="border border-slate-300 p-4 "> {price} </td>
      <td className="border border-slate-300 p-4 text-center ">
        <button className="text-white bg-blue-800 rounded px-4 py-1">
          Edit
        </button>
      </td>
      <td className="border border-slate-300 p-4 "> Delete </td>
    </tr>
  );
};

export default ManageProductData;
