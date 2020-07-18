export const addToCart = (item) => {
    return {
        type: 'ADD_TO_CART',
        payload: item
    }

}


export const editItem = (item) => {
    console.log('ACTION:edit')
    return {
        type: 'EDIT_ITEM',
        payload: item
    }
}

export const removeFromCart = (item) => {
    console.log('action:remove')
    return {
        type: 'REMOVE_FROM_CART',
        payload: item
    }
}
export const addToWishList = (item) => {
    return {
        type: 'ADD_TO_WISHLIST',
        payload: item
    }
}

export const removeFromWishList = (item) => {
    return {
        type: 'REMOVE_FROM_WISHLIST',
        payload: item
    }
}

export const toggleHeart = (item) => {
    return {
        type: 'TOGGLE_HEART',
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
    console.log(name)
    return {
        type: 'EDIT_DETAIL',
        payload: { name, value }
    }
}

export const actionMouseOver = (id) => {
    //   console.log('mouse over')
    return {
        type: 'MOUSE_OVER',
        payload: id
    }
}
export const actionMouseOut = (id) => {
    return {
        type: 'MOUSE_OUT',
        payload: id
    }
}

export const selectType = (type) => {
    console.log('action: ' + type)
    return {
        type: 'SELECT_TYPE',
        payload: type
    }
}

// export const goToBuy=()=>{
//     return (dispatch)=>{
//         browserHistory.push
//     }
// }