import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'Cart',
    initialState : {
        items : []
    },
    reducers : {
        addItem : (state,action) => {
            state.items.push(action.payload);
        },
        removeItem : (state) => {
            state.items.pop();
        },
        clearCart : (state) => {
            // state.items.length = 0; // Looks like a mutation, but it's actually creating a new state
            state.items = []; 
            // state = []; // Immer cannot track this, so it results in an error or does nothing.
        }
    }
});

export const {addItem,removeItem,clearCart} = cartSlice.actions;

export default cartSlice.reducer;