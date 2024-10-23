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
  },
});

export default cartSlice.reducer;

export const { addToCart } = cartSlice.actions;
