import { createSlice } from "@reduxjs/toolkit";
import data from "../components/data";

const initialState = {
    cart: data,
    total: 0,
    amount: 4,
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cart = []
        },
        removeItem: (state,action) => {
            const itemId = action.payload;
            state.cart = state.cart.filter((item) => item.id !== itemId);
        },
        increase: (state, {payload}) => {
            const cartItem = state.cart.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, {payload}) => {
            const cartItem = state.cart.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount - 1;
        },
        totalYigish: (state) => {
            let amount = 0;
            let total = 0;
            state.cart.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount
            state.total = amount
        },
    },
});

export const { removeItem,clearCart,increase,decrease,total,totalYigish} = cartSlice.actions;


export default cartSlice.reducer;

