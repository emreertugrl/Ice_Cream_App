import { render, screen } from "@testing-library/react";
import Selector from "../components/list/Selector";
import userEvent from "@testing-library/user-event";

describe("Selector Bileşeni", () => {
  const mockFn = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });
  it("Butonlara tıklanınca fonksiyon doğru parametrelerle tetiklenir.", async () => {
    // userEvent kurulumu
    const user = userEvent.setup();
    // bileşeni render
    render(<Selector selectedType={null} setSelectedType={mockFn} />);

    // butonları al
    const cornetBtn = screen.getByRole("button", { name: "Külahta" });
    const cupBtn = screen.getByRole("button", { name: "Bardakta" });

    // külahta butonuna tıkla
    // fireEvent.click(cornetBtn);
    await user.click(cornetBtn);

    // fonksiyon "cornet" parametresi ile tetiklenir
    expect(mockFn).toHaveBeenCalledWith("cornet");

    // bardakta butonuna tıkla
    await user.click(cupBtn);

    // fonksiyon "cup" parametresi ile tetiklenir
    expect(mockFn).toHaveBeenCalledWith("cup");
  });
  it("Cornet seçilince butonun arkaplanı değişir.", () => {
    render(<Selector selectedType="cornet" setSelectedType={mockFn} />);

    const cornetBtn = screen.getByRole("button", { name: "Külahta" });
    const cupBtn = screen.getByRole("button", { name: "Bardakta" });

    // cornet butonunda seçili eleman classları vardır.
    expect(cornetBtn).toHaveClass("bg-white text-black shadow-lg");

    // cup butonunda seçili eleman classları yoktur.
    expect(cupBtn).not.toHaveClass("bg-white text-black shadow-lg");
  });
  it("Cup seçilince butonun arkaplanı değişir.", () => {
    render(<Selector selectedType="cup" setSelectedType={mockFn} />);

    const cornetBtn = screen.getByRole("button", { name: "Külahta" });
    const cupBtn = screen.getByRole("button", { name: "Bardakta" });

    // cornet butonunda seçili eleman classları vardır.
    expect(cupBtn).toHaveClass("bg-white text-black shadow-lg");

    // cup butonunda seçili eleman classları yoktur.
    expect(cornetBtn).not.toHaveClass("bg-white text-black shadow-lg");
  });
});
