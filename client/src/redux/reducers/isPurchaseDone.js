import { IS_PURCHASE_DONE } from '../type';

const initialState = false

const isPurchaseDone = (state = initialState, { type, payload }) => {
    switch (type) {
        case IS_PURCHASE_DONE:
            return true
        default: return state
    }
}

export default isPurchaseDone;