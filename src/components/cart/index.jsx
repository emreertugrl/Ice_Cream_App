import { useState } from "react";
import Modal from "./Modal";

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sticky top-10 left-0 z-50 -mb-8">
      <button
        onClick={() => setIsOpen(true)}
        className="bg-white rounded-full px-4 py-1 pr-14  flex items-center gap-2 text-[20px] lg:text-[24px] font-semibold text-black relative hover:bg-gray-200 transition shadow-lg shadow-gray-300/90"
      >
        Sepet
        <img
          src="/cart-1.png"
          alt="cart-icon"
          className="w-12 absolute right-1 bottom-0"
        />
      </button>
      <Modal isOpen={isOpen} close={() => setIsOpen(false)} />
    </div>
  );
};

export default Cart;
