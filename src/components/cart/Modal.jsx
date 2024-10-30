import { useSelector } from "react-redux";
import { IoClose } from "react-icons/io5";
import CartItem from "./CartItem";
import CartInfo from "./CartInfo";

const Modal = ({ isOpen, close }) => {
  const { cart } = useSelector((store) => store);
  return (
    isOpen && (
      <div className="fixed bg-black/30 inset-0 grid place-items-center text-black backdrop-blur">
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
          <div>
            {cart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
          <CartInfo cart={cart} />
        </div>
      </div>
    )
  );
};

export default Modal;
