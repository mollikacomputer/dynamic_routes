import getAllProducts from "@/utils/getAllProducts";
import ManageSingleProduct from "./ManageSingleProduct";


const ManageProductData = async() => {
  const products = await getAllProducts();
  // const modalRef = useRef(null);
  // const [updateData, setUpdateData] = useState(null);
  
  // const openModal = ({id, title, price}) =>{
  //   setUpdateData(id, title, price);
  //   modalRef.current.showModal()
  // };

  // const closeModal = () =>{
  //   setUpdateData(null);
  //   modalRef.current.closeModal();
  // };

  return (
    <div >
       <table className="w-full">
      <thead>
        <tr>
          <th className='border border-slate-400 p-2'>Product Name</th>
          <th className='border border-slate-400 p-2'>Price</th>
          <th className='border border-slate-400 p-2'>Edit</th>
          <th className='border border-slate-400 p-2'>Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          products.map((product)=>(<ManageSingleProduct key={product.id} product={product} />))
        }
      </tbody>
    </table>
    </div>
  );
};

export default ManageProductData;
