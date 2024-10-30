import { render, screen } from "@testing-library/react";
import AmountPicker from "../components/cart/AmountPicker";

describe("AmountPicker", () => {
  const item = {
    name: "Bal Badem",
    image: "/ice-5.png",
    price: 25,
    id: "5b40",
    selectedType: "cornet",
    quantity: 1,
  };
  it("miktar değeri doğrudur.", () => {
    render(<AmountPicker item={item} />);
    screen.getByText(2);
  });
  it("- butonuna tıklanınca doğru aksiyon tetiklenir", () => {});
  it("+ butonuna tıklanınca doğru aksiyon tetiklenir", () => {});
});
