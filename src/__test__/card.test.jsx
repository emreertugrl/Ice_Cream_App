import { fireEvent, render, screen } from "@testing-library/react";
import Card from "./../components/card";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

// useDispatch mockla
jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

// useDispatch dispatch olarak kullanma
const useDispatchMock = require("react-redux").useDispatch;

//

describe("Card Bileşeni", () => {
  // buradaki testlerde ortak kullanılacak değişkenleri tanımlayalım
  const mockItem = {
    name: "Bal Badem",
    image: "/ice-5.png",
    price: 25,
    id: "b783",
  };
  let dispatchMock;
  //   her testen önce
  beforeEach(() => {
    // dispatch mocklanır
    dispatchMock = jest.fn();

    // useDispatch tetiklendiği zaman
    useDispatchMock.mockReturnValue(dispatchMock);
  });
  //   her testen sonra ömock sıfırla
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("item detaylarını doğru şekilde renderlar", () => {
    render(<Card item={mockItem} />);

    screen.getByRole("heading", { name: "Bal Badem" });
    screen.getByText("₺ 25 / top");
    expect(screen.getByRole("img")).toHaveAttribute("src", "/ice-5.png");
  });
  it("tipin seçili olmaısna göre sepete ekle butonu görünürlüğü değişir", () => {
    render(<Card item={mockItem} />);

    // sepete ekle butonunu al
    const btn = screen.queryByRole("button", { name: "Sepete Ekle" });

    // ekranda sepete ekle butonu gözükmez
    expect(btn).toHaveClass("invisible");

    // külahta seçeneğini seç
    const typeBtn = screen.getByRole("button", { name: "Külahta" });
    fireEvent.click(typeBtn);

    // ekranda sepete ekle butonu görünür.
    expect(btn).not.toHaveClass("invisible");
  });
  it("sepete ekle tıklanınca ürünü sepete ekler", () => {
    render(<Card item={mockItem} />);

    // sepete ekle butonunu al
    const typeBtn = screen.getByRole("button", { name: "Bardakta" });
    fireEvent.click(typeBtn);

    // sepete ekle butonunu al
    const addBtn = screen.getByRole("button", { name: "Sepete Ekle" });
    fireEvent.click(addBtn);
    // dispatch doğru parametrelerle tetiklenir sepete eklenir)
    expect(dispatchMock).toHaveBeenCalledWith(
      addToCart({
        item: mockItem,
        selectedType: "cup",
      })
    );
  });
});
