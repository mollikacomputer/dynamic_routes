"use client"

import { forwardRef } from "react";

const AddProductModal = ({updateData, closeModal}, {ref}) => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog ref={ref} id="productEditModal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={()=>closeModal()}  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg text-blue-500">  {updateData.title} </h3>
          <p className="py-4"> {updateData.price} Tk </p>
        </div>
      </dialog>
    </div>
  );
};

export default  forwardRef(AddProductModal);
