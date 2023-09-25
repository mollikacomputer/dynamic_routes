"use client"

import { useRef, useState } from "react";
import AddProductModal from "./modall";

const ManageProductData = ({id, title, price}) => {
  const modalRef = useRef(null);
  const [updateData, setUpdateData] = useState(null);
  
  const openModal = ({id, title, price}) =>{
    setUpdateData(id, title, price);
    modalRef.current.showModal()
  };

  const closeModal = () =>{
    setUpdateData(null);
    modalRef.current.closeModal();
  };

  return (
    <tr>
      <td className="border border-slate-300 p-4 "> {id}. </td>
      <td className="border border-slate-300 p-4 "> {title} </td>
      <td className="border border-slate-300 p-4 "> {price} </td>
      <td className="border border-slate-300 p-4 text-center ">
      <button
        className="btn"
        onClick={() => openModal()}
      >
        Edit
      </button>
        
      </td>
      <td className="border border-slate-300 p-4 "> Delete </td>

      <AddProductModal closeModal={closeModal} updateData={updateData} ref={modalRef} id={id} title={title} price={price}  />
    </tr>
  );
};

export default ManageProductData;
