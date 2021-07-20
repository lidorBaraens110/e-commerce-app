import { INITIAL_CART, ADD_TO_CART, REMOVE_FROM_CART, HANDLE_QUANTITY, UPDATE_ITEM, UPDATE_ALERT_CART, REMOVE_ALERT_FROM_CART } from '../type';

const initialState = [];

const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_TO_CART:
            console.log(payload)
            const currentId = state.find(item => item.id === payload.id && item.currentColor === payload.currentColor);
            if (!currentId) {
                return [...state, payload]
            } else {
                const newState = state.map(item => {
                    if (item.id === payload.id && item.currentColor === payload.currentColor) {
                        return { ...item, quantity: item.quantity + 1 }
                    } return item
                })
                return [...newState]
            }

        case REMOVE_FROM_CART:
            const newState = state.filter(item => {
                return !(item.id === payload.id && item.currentColor === payload.currentColor)
            })
            return [...newState]

        case HANDLE_QUANTITY:
            const currentState = state.map(item => {
                if (item.id === payload.id && item.currentColor === payload.currentColor) {
                    return { ...item, quantity: item.quantity + payload.quantity }
                } return item
            })
            return [...currentState]

        case UPDATE_ITEM:
            if (payload.lastColor === payload.item.currentColor) {
                return state
            }
            let updateState = []
            const existItem = state.find(item => item.currentColor === payload.item.currentColor)
            if (existItem) {
                updateState = state.reduce((acc, val) => {
                    if (payload.item.currentColor === val.currentColor) {
                        return acc.concat({ ...val, quantity: val.quantity + 1 })
                    } if (val.currentColor === payload.lastColor) {
                        return acc
                    }
                    return acc.concat(val)
                }, [])
            } else {
                updateState = state.reduce((acc, val) => {
                    if (val.currentColor === payload.lastColor) {
                        return acc.concat(payload.item)
                    }
                    return acc.concat(val)
                }, [])
            }
            return [...updateState]

        case UPDATE_ALERT_CART:
            const x = state.map(item => {
                const current = payload.reduce((acc, val) => {
                    if (val.currentColor === item.currentColor) {
                        let y = { ...item, totalQuantity: val.totalQuantity, alert: true }
                        acc.push(y)
                        return acc
                    } else
                        return acc
                }, [])
                if (current[0]) {
                    return current[0]
                }
                return item
            })
            return [...x]

        case REMOVE_ALERT_FROM_CART:
            return state.map(item => {
                delete item.alert
                return item
            })

        case INITIAL_CART:
            return initialState
        default:
            return state
    }
}

export default cartReducer;