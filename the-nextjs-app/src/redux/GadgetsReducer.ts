"use client"
import type { CartItem } from "../model/CartItem";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type GadgetState = {
    cart: CartItem[]
}

const initialState: GadgetState = {
    cart: []
}



//addItem action=> {type:"addToCart",payload:CartItem}
//removeItem action=> {type:"removeItem",prodcutId: number}
//clear Cart action=> {type: "clearCart"}
// export const gadgetsReducer=(state:GadgetState=initialState,action)=>{


//     if(action.type==='addToCart'&& action.payload){
//         const cart=[...state.cart];
//         cart.push(action.paylod);
//         return{
//             cart:cart
//         }

//     }


//     return state;
// }

const slice = createSlice({
    name: "gadgetSlice",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const index = state.cart.findIndex(
                (item) => item.product?.id === action.payload.product?.id
            );

            if (index !== -1) {
                // Item already exists in cart, just increment quantity
                state.cart[index].quantity = (state.cart[index].quantity || 0) + (action.payload.quantity || 1);
            } else {
                // New item, push to cart
                state.cart.push(action.payload);
            }
        },
        removeFromCart: (state: GadgetState, action: PayloadAction<number>) => {
            const index = state.cart.findIndex(item => item.product?.id == action.payload)
            if (index !== -1) {
                state.cart.splice(index, 1);
            }

        },
        clearCart: (state) => {
            state.cart.splice(0, state.cart.length);

        }
    }
})

export const { addToCart, removeFromCart, clearCart } = slice.actions
export const gadgetsReducer = slice.reducer;