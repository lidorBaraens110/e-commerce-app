import pictureTest from '../data/allClothes';

const initialState = {
    items: pictureTest.items,
    wishList: [],
    cart: [],
    selected: []
}

const itemsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SELECT_TYPE':
            return { ...state, selected: state.items.filter(item => item.bodyBuild === payload || item.type === payload) }
        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, payload] }
        case 'EDIT_ITEM':
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item.id !== payload.id) {
                        console.log('שונה')
                        // This isn't the item we care about - keep it as-is
                        return item
                    }
                    console.log('שווה')
                    // Otherwise, this is the one we want - return an updated value
                    return {
                        ...item,
                        ...payload
                    }
                })
            }
        case 'REMOVE_FROM_CART':
            return { ...state, cart: state.cart.filter(item => item.id !== payload) }
        case 'ADD_TO_WISHLIST':
            return {
                ...state, wishList: [...state.wishList, payload]
            }
        case 'TOGGLE_HEART':
            console.log(payload)
            return {
                ...state, ...state.items.map(item => {
                    if (payload.id === item.id)
                        return item.wishList = !item.wishList
                })
            }
        case 'REMOVE_FROM_WISHLIST':
            return { ...state, wishList: state.wishList.filter(clothe => clothe.id !== payload) }

        case 'MOUSE_OVER':
            return {
                ...state, selected: state.selected.map(item => {
                    if (item.id === payload) {
                        return { ...item, currentImage: 1 }
                    } else {
                        return item
                    }
                })
            }
        case 'MOUSE_OUT':
            return {
                ...state, selected: state.selected.map(item => {
                    if (item.id === payload) {
                        return { ...item, currentImage: 0 }
                    } else {
                        return item
                    }
                })
            }
        default: return state
    }
}

export default itemsReducer;