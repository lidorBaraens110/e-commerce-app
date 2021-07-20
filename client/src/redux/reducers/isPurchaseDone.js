import { INITIAL_PURCHASE, PURCHASE_COMPLETE } from '../type';

const initialState = false;

const isPurchaseDone = (state = initialState, { type, payload }) => {
    switch (type) {
        case PURCHASE_COMPLETE:
            return true
        case INITIAL_PURCHASE:
            return false
        default:
            return state
    }
}

export default isPurchaseDone;