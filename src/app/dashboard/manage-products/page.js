import getAllProducts from "@/utils/getAllProducts";
import ManageProductData from "./ManageProductData";

const ManageProductsPage = async () => {
  const products = await getAllProducts();
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl text-center font-semibold">
        Manage Products page
      </h2>
      <table class=" mx-auto">
        <thead className="w-full">
          <tr>
            <th className="border border-slate-300 bg-slate-200 p-4 ">Serial No.</th>
            <th className="border border-slate-300 bg-slate-200 p-4 ">Product Name</th>
            <th className="border border-slate-300 bg-slate-200 p-4 ">Price</th>
            <th className="border border-slate-300 bg-slate-200 p-4 ">Edit</th>
            <th className="border border-slate-300 bg-slate-200 p-4 ">Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ id, title, price }) => (
            <ManageProductData key={id} id={id} title={title} price={price} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProductsPage;
