import {
    ADD_TO_CART, ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
    HANDLE_QUANTITY, REMOVE_FROM_CART, TOGGLE_CART, UPDATE_ITEM,
    IS_PURCHASE_DONE
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