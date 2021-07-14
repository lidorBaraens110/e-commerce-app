import {
    ADD_EXTENT,
    REMOVE_EXTENT,
    EDIT_DISCOUNT,
    INITIAL,
    EDIT_ITEM,
    REMOVE_COLOR,
    UPLOAD_ITEM,
    ITEM_SALE,
    FILL_ITEM,
    ADD_COLOR,
    EDIT_IMAGES,
    EDIT_SIZE
} from '../type'

export const initial = () => {
    return {
        type: INITIAL
    }
}
export const itemSale = () => {
    return {
        type: ITEM_SALE
    }
}
export const addExtent = (extent) => {
    return {
        type: ADD_EXTENT,
        payload: extent
    }
}
export const editDiscount = ({ name, value }) => {
    console.log(name, value)
    return {
        type: EDIT_DISCOUNT,
        payload: { name, value }
    }
}
export const addColor = ({ name, value }) => {
    return {
        type: ADD_COLOR,
        payload: { name, value }
    }
}

export const removeExtent = (index) => {
    return {
        type: REMOVE_EXTENT,
        payload: index
    }
}

export const removeColor = (key) => {
    return {
        type: REMOVE_COLOR,
        payload: key
    }
}
// export const handleSize=(val)=>{
//     return {
//         type: EDIT_ITEM,
//         payload: { name:'sizeType', value }
//     }
// }
export const initialItems = (items) => {
    return {
        type: 'INITIAL_ITEMS',
        payload: items
    }
}
export const editItem = ({ name, value }) => {

    return {
        type: EDIT_ITEM,
        payload: { name, value }
    }
}
export const editSize = ({ name, value }) => {
    return {
        type: EDIT_SIZE,
        payload: { name, value }
    }
}

export const uploadItem = (item) => {
    return {
        type: UPLOAD_ITEM,
        payload: item
    }
}

export const fillItem = (item) => {
    return {
        type: FILL_ITEM,
        payload: item
    }
}
export const editImages = (url) => {
    return {
        type: EDIT_IMAGES,
        payload: url
    }
}
