import { TOGGLE_CART } from '../type';

const initialState = false;

const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TOGGLE_CART:
            return !state
        default:
            return state
    }
}

export default cartReducer;