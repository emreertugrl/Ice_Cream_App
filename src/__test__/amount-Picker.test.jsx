import { render, screen } from "@testing-library/react";
import AmountPicker from "../components/cart/AmountPicker";
import { useDispatch } from "react-redux";
import { userEvent } from "@testing-library/user-event";
import { addToCart, deleteFromCart } from "../redux/cartSlice";

// useDispatch mocklanır
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("AmountPicker", () => {
  const item = {
    name: "Bal Badem",
    image: "/ice-5.png",
    price: 25,
    id: "5b40",
    selectedType: "cornet",
    quantity: 1,
  };
  // useDispatch döndürdüğü dispatch mocklama
  const dispatchMock = jest.fn();

  //
  beforeEach(() => {
    // useDispatch çağrıldığı zaman geriye dispatchMock çağrılır.
    useDispatch.mockReturnValue(dispatchMock);
    // her testen önce sıfırla
    dispatchMock.mockClear();
  });

  it("miktar değeri doğrudur.", () => {
    render(<AmountPicker item={item} />);
    screen.getByText("1");
  });
  it("- butonuna tıklanınca doğru aksiyon tetiklenir", async () => {
    render(<AmountPicker item={item} />);
    const user = userEvent.setup();
    const btn = screen.getByRole("button", { name: "-" });
    await user.click(btn);
    expect(dispatchMock).toHaveBeenCalledWith(deleteFromCart(item));
  });
  it("+ butonuna tıklanınca doğru aksiyon tetiklenir", async () => {
    render(<AmountPicker item={item} />);
    const user = userEvent.setup();
    const btn = screen.getByRole("button", { name: "+" });
    await user.click(btn);
    expect(dispatchMock).toHaveBeenCalledWith(
      addToCart({ item: item, selectedType: item.selectedType })
    );
  });
});
