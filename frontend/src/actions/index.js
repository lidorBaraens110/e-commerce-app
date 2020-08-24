export const newCollection = () => {
    return {
        type: 'NEW_COLLECTION'
    }
}
export const searchAction = (value) => {

    return {
        type: 'SEARCH',
        payload: value
    }
}

export const initial = (items) => {
    return {
        type: 'INITIAL',
        payload: items
    }
}

export const sortState = (sortValue) => {
    return {
        type: 'SORT',
        payload: sortValue
    }
}
export const addToCart = ({ item, itemId }) => {
    return {
        type: 'ADD_TO_CART',
        payload: { item, itemId }
    }

}


export const editItem = ({ item, value }) => {
    console.log('ACTION:edit')
    return {
        type: 'EDIT_ITEM',
        payload: { item, value }
    }
}

export const removeFromCart = (item) => {
    console.log('action:remove')
    return {
        type: 'REMOVE_FROM_CART',
        payload: item
    }
}
export const addToWishList = (id) => {
    return {
        type: 'ADD_TO_WISHLIST',
        payload: id
    }
}

export const removeFromWishList = (id) => {
    return {
        type: 'REMOVE_FROM_WISHLIST',
        payload: id
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
export const initItem = (item) => {
    return {
        type: 'INIT_ITEM',
        payload: item
    }
}
export const handleSize = (value) => {
    return {
        type: 'HANDLE_SIZE',
        payload: value
    }
}
export const sizeAlert = (flag) => {
    return {
        type: 'SIZE_ALERT',
        payload: flag
    }
}
export const compareSizeAlert = (flag) => {
    return {
        type: 'SIZE_COMPARE_ALERT',
        payload: flag
    }
}
export const pickSize = (size) => {
    console.log('pick size: ' + size)
    return {
        type: 'SIZE',
        payload: size
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