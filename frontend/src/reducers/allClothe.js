import pictureTest from '../data/allClothes';

const initialState = {
    items: pictureTest.items,
    wishList: [],
    cart: [],
    selected: []
}

const itemsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'INITIAL':
            return { ...state, items: payload }
        case 'SELECT_TYPE':
            return { ...state, selected: state.items.filter(item => item.bodyBuild === payload || item.type === payload) }
        case 'SORT':
            console.log(payload)
            return {
                ...state, selected: state.selected.sort((a, b) => {
                    return a.price - b.price
                })
            }
        case 'NEW_COLLECTION':
            return {
                ...state, selected: state.items.sort((a, b) => {
                    return b.date - a.date
                }).slice(0, 2)
            }
        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, payload] }
        case 'EDIT_ITEM':
            return {
                ...state,
                cart: state.cart.map(item => {
                    if (item._id !== payload._id) {
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
            return { ...state, cart: state.cart.filter(item => item._id !== payload) }
        case 'ADD_TO_WISHLIST':
            return {
                ...state, wishList: [...state.wishList, payload]
            }
        case 'TOGGLE_HEART':
            console.log(payload)
            return {
                ...state, ...state.items.map(item => {
                    if (payload._id === item._id)
                        return item.wishList = !item.wishList
                })
            }
        case 'REMOVE_FROM_WISHLIST':
            return { ...state, wishList: state.wishList.filter(item => item._id !== payload) }

        case 'MOUSE_OVER':
            return {
                ...state, selected: state.selected.map(item => {
                    if (item._id === payload) {
                        return { ...item, currentImage: 1 }
                    } else {
                        return item
                    }
                })
            }
        case 'MOUSE_OUT':
            return {
                ...state, selected: state.selected.map(item => {
                    if (item._id === payload) {
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