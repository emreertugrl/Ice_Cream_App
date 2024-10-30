import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addToCart: (state, { payload }) => {
      // şuan eklenen elemandan sepette aynı tipte eleman var mı ?
      const existingItem = state.cart.find(
        (item) =>
          item.id === payload.item.id &&
          item.selectedType === payload.selectedType
      );
      // sepette varsa
      if (existingItem) {
        // sepeteki aynı tipteki elemanın miktarını 1 arttır
        existingItem.quantity += 1;
      } else {
        // sepette yoksa
        state.cart.push({
          ...payload.item,
          selectedType: payload.selectedType,
          quantity: 1,
        });
      }
    },
    createOrder: (state) => {
      state.cart = [];
    },
    deleteFromCart: (state, { payload }) => {
      // aynı id ve aynı tipteki elemanı sepette sırasını bul
      const index = state.cart.findIndex(
        (i) => i.id === payload.id && i.selectedType === payload.selectedType
      );
      // miktarı 1den fazla ise miktarını azalt
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      } else {
        // miktarı 1 ise ürünü sil
        state.cart.splice(index, 1);
      }
    },
  },
});

export default cartSlice.reducer;

export const { addToCart, createOrder, deleteFromCart } = cartSlice.actions;
