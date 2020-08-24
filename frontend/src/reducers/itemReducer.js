const initialState = {
    type: '',
    bodyBuild: '',
    name: '',
    description: '',
    price: '',
    sizes: [],
    images: [],
    date: new Date(),
    cart: false,
    wishList: false,
    sizeSelected: { name: '', left: 0 },
    countSelected: 1,
    compareSizeAlert: false,
    sizeAlert: false,
}

const userDetailsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SIZE':
            console.log('pick size :' + payload)
            return { ...state, sizeSelected: payload, countSelected: 1 }
        case 'INIT_ITEM':
            console.log(payload)
            return {
                ...state,
                ...payload,
                sizeSelected: payload.sizes[0],
                countSelected: 1
            }
        case 'SEND_DETAILS':
            return state
        case 'EDIT_DETAIL':
            return {
                ...state, [payload.name]: payload.value
            }

        case 'SIZE_ALERT':
            return { ...state, sizeAlert: payload }
        case 'SIZE_COMPARE_ALERT':
            return { ...state, compareSizeAlert: payload }
        case 'HANDLE_SIZE':
            return { ...state, countSelected: state.countSelected + payload, }
        default: return state
    }
}

export default userDetailsReducer;