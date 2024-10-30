import { useDispatch } from "react-redux";
import { createOrder } from "../../redux/cartSlice";

//
const CartInfo = ({ cart, close }) => {
  const dispatch = useDispatch();
  const subTotal = cart.reduce((a, b) => a + b.price * b.quantity, 0);
  const shipping = 20;
  const total = subTotal + shipping;

  const handleClick = () => {
    dispatch(createOrder());
    close();
  };
  return (
    <div className="fs-5 py-5 text-lg">
      <p className="flex justify-between">
        <span className="text-gray-500 font-semibold">Ara Toplam</span>
        <span className="to-gray-700 font-semibold">{subTotal}₺</span>
      </p>
      <p className="flex justify-between py-2">
        <span className="text-gray-500 font-semibold">Kargo</span>
        <span className="to-gray-700 font-semibold">{shipping}₺</span>
      </p>
      <p className="flex justify-between">
        <span className="text-gray-500 font-semibold">Toplam</span>
        <span className="to-gray-700 font-semibold text-2xl">{total}₺</span>
      </p>

      <button
        disabled={subTotal === 0}
        onClick={handleClick}
        className="bg-red-500 mt-4 w-full p-2 rounded-md text-white hover:bg-red-600"
      >
        Sipariş Ver
      </button>
    </div>
  );
};

export default CartInfo;
