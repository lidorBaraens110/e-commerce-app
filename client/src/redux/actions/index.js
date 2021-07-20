import {
    ADD_TO_CART, ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
    HANDLE_QUANTITY, REMOVE_FROM_CART, TOGGLE_CART, UPDATE_ITEM,
    IS_PURCHASE_DONE, UPDATE_ALERT_CART, REMOVE_ALERT_FROM_CART,
    PURCHASE_COMPLETE,
    INITIAL_CART,
    INITIAL_PURCHASE
} from "../type"

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }

}

export const handleQuantity = (item) => {
    return {
        type: HANDLE_QUANTITY,
        payload: item
    }
}

export const removeFromCart = (item) => {
    return {
        type: REMOVE_FROM_CART,
        payload: item
    }
}


export const sendDetails = (detail) => {
    return {
        type: 'SEND_DETAILS',
        payload: detail
    }
}

export const editDetail = ({ name, value }) => {

    return {
        type: 'EDIT_DETAIL',
        payload: { name, value }
    }
}


export const addToWishList = (id) => {
    return {
        type: ADD_TO_WISHLIST,
        payload: id
    }
}

export const removeFromWishList = (id) => {
    return {
        type: REMOVE_FROM_WISHLIST,
        payload: id
    }
}

export const toggle = () => {
    return {
        type: TOGGLE_CART
    }
}


export const updateItem = (item) => {
    return {
        type: UPDATE_ITEM,
        payload: item
    }
}


export const isPurchaseDone = (bool) => {
    return {
        type: IS_PURCHASE_DONE,
    }
}

export const updateAlertCart = (items) => {
    console.log('salfasljfn')
    return {
        type: UPDATE_ALERT_CART,
        payload: items
    }
}
export const removeAlertFromCart = () => {
    return {
        type: REMOVE_ALERT_FROM_CART
    }
}
export const purchaseComplete = () => {
    return (dispatch, getState) => {
        const state = getState()
        console.log(state)

    }
    // return {
    //     type: PURCHASE_COMPLETE,
    // }
}
export const initialCart = () => {
    return { type: INITIAL_CART }
}
export const initialPurchase = () => {
    return { type: INITIAL_PURCHASE }
}