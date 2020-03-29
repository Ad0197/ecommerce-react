import {CartActionTypes} from "./cart.type";
import {addItemToCart} from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    carItems: [],
}

const cartReducer = (state= INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                carItems: addItemToCart(state.carItems, action.payload),
            }
        default:
            return INITIAL_STATE;
    }
}

export default cartReducer;