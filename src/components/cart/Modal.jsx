import { useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";
import CartItem from "./CartItem";
import CartInfo from "./CartInfo";

const Modal = ({ isOpen, close }) => {
  const { cart } = useSelector((store) => store);
  return (
    isOpen && (
      <div className="fixed overflow-y-auto  bg-black/30 inset-0 grid place-items-center text-black backdrop-blur">
        <div className="bg-white p-5 rounded-lg w-[90%] md:w-[600px]">
          <div className="border-b  pb-3 max-md:text-lg fs-5 flex justify-between">
            <h1 className="font-semibold ">SİPARİŞ</h1>
            <button
              onClick={close}
              className="border p-2 rounded-md hover:bg-gray-300/50"
            >
              <IoClose />
            </button>
          </div>
          <div className="overflow-auto">
            {cart.length === 0 ? (
              <p className="text-center text-gray-600 py-5 border-b text-lg font-semibold">
                Henüz sepete ürün eklenmedi
              </p>
            ) : (
              cart.map((item) => <CartItem item={item} key={item.id} />)
            )}
          </div>
          <CartInfo cart={cart} close={close} />
        </div>
      </div>
    )
  );
};

export default Modal;
