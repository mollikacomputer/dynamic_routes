import getAllProducts from "@/utils/getAllProducts";
import ManageProductData from "./ManageProductData";

const ManageProductsPage = async () => {
  const products = await getAllProducts();
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl text-center font-semibold">
        Manage Products page
      </h2>
      <ManageProductData/>
    </div>
  );
};

export default ManageProductsPage;
