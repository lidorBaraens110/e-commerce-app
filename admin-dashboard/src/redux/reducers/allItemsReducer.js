

const initialState = {

}



const allItemsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'INITIAL_ITEMS':
            return payload
        default: return state
    }
}

export default allItemsReducer