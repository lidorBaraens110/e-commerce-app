const initialState = {
    email: '',
    fname: '',
    lname: '',
    address: '',
    city: '',
    num: '',
    postalCode: '',
    phone: ''
}

const userDetailsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SEND_DETAILS':
            console.log(state)
            return state
        case 'EDIT_DETAIL':
            return {
                ...state, [payload.name]: payload.value
            }
        default: return state
    }
}

export default userDetailsReducer;