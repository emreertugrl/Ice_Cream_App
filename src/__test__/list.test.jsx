import { render, screen, waitFor } from "@testing-library/react";
import List from "./../components/list";
import api from "../api";
import { mockArray } from "./../constants";
import Card from "../components/card";
import Cart from "./../components/cart";

// api modülünü mockla
jest.mock("../api");

// car bielşeni kendi içinde providfe / browser router gibi bağımlılıkları kullandığından ve bu bağımlılkarın list bileşenin testine etki etmesini istemediğimizden card bileşenini mock'la
jest.mock("../components/card");
jest.mock("../components/cart");

describe("List Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("veri çekilirken ekranda loader gelir.", async () => {
    // api isteği atılınca gönderilecek cevabı belirleyelim
    api.get.mockResolvedValueOnce({ data: [] });

    render(<List />);
    // ekranda loader vardır
    screen.getByTestId("loader");

    // belirli bir süre sonra loader gider.
    await waitFor(() =>
      expect(screen.queryByTestId("loader")).not.toBeInTheDocument()
    );
  });
  it("apiden error cevabı gelirse ekrana hata mesajı gelir.", async () => {
    // api isteği atılınca hata veren bir cevabı belirleyelim
    // const errMsg = "bağlantı zaman aşımına uğradı";
    api.get.mockRejectedValueOnce(new Error("bağlantı zaman aşımına uğradı"));

    render(<List />);
    // apiden cevap gelince ekrana hata mesajı gelir.
    await waitFor(() => screen.getByText("bağlantı zaman aşımına uğradı"));
  });

  it("apiden başarılı cevabı gelirse ekrana cardlar gelir.", async () => {
    // card bileşeni çağrıldığında şunu döndür.
    // bileşene gönderilen proplar obje içinde item ile temin edilir.
    Card.mockImplementation(({ item }) => <div>{item.name}</div>);
    api.get.mockResolvedValueOnce({ data: mockArray });

    // bileşeni renderla
    render(<List />);

    // ekrana kart geliyor mu ?
    await waitFor(() => {
      mockArray.forEach((item) => {
        expect(screen.getByText(item.name)).toBeInTheDocument();
      });
    });
  });
});
