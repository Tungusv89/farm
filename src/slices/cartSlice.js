import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: "1",
    imageWebp: "./img/meat.webp",
    image: "./img/meat.jpg",
    good: "Мясо",
    price: "450Р/кг",
    priceInNumbers: 450,
    unit: "кг",
    value: 1
  },
  {
    id: "2",
    imageWebp: "./img/milk.webp",
    image: "./img/milk.jpg",
    good: "Молоко",
    price: "50Р/кл",
    priceInNumbers: 50,
    unit: "л",
    value: 1
  },
  {
    id: "3",
    imageWebp: "./img/eggs.webp",
    image: "./img/eggs.jpg",
    good: "Яйца",
    price: "50Р/10шт",
    priceInNumbers: 5,
    unit: "шт",
    value: 1
  },
  {
    id: "4",
    imageWebp: "./img/potato.webp",
    image: "./img/potato.jpg",
    good: "Картошка",
    pack: "(мешок)",
    price: "38Р/кг",
    priceInNumbers: 38,
    unit: "кг",
    value: 1
  },
]

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action)  {
      const { id } = action.payload;
      const item = state.find(item => item.id === id);
      if (item && (item.value <= 100)) {
        item.value += 1;
      }
    },
    remove(state, action) {
      const { id } = action.payload;
      const item = state.find(item => item.id === id);
      if (item && (item.value >= 2)) {
        item.value -= 1;
      }
    }
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
