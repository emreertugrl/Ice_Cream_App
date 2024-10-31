import { render, screen } from "@testing-library/react";
import CartItem from "../components/cart/CartItem";
import { mockItem } from "../constants";
import AmountPicker from "../components/cart/AmountPicker";

jest.mock("../components/cart/AmountPicker.jsx");

it("cart item bileşeni gelen propa göre renderlanır", () => {
  render(<CartItem item={mockItem} />);

  screen.getByText(mockItem.name);
  screen.getByText(mockItem.selectedType);
  screen.getByText(mockItem.quantity * mockItem.price + " ₺");
  const img = screen.getByRole("img");
  expect(img).toHaveAttribute("src", mockItem.image);
});
