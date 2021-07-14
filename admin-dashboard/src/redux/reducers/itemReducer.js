import {
    EDIT_DISCOUNT,
    REMOVE_EXTENT,
    INITIAL,
    EDIT_ITEM,
    UPLOAD_ITEM,
    ADD_EXTENT,
    REMOVE_COLOR,
    ADD_COLOR,
    FILL_ITEM
} from '../type'


const initialState = {
    modelNumber: '',
    sizeType: '', //
    type: '', //
    name: '', // 
    description: '', //
    price: '', //
    discount: { //
        state: false,
        type: 'אחוז הנחה',
        value: 0,
        discount: 0,
        finalPrice: 0
    },
    sizes: { //
        color: {
            colorId: {
                colorCode: '',
                name: '',
                images: [],
                sizes: {
                    s: { amount: 0, extent: '' },
                    m: { amount: 0, extent: '' },
                    lg: { amount: 0, extent: '' },
                    xl: { amount: 0, extent: '' }
                },
            }
        }
    },
    oneSize: { //
        extent: [],
        colors: {}
        //     colorId: {
        //         colorCode: '',
        //         name: '',
        //         images: []
        //     }
        // }
    },
    newCollection: true, //
    recommended: false, //
}


const itemReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case INITIAL:
            return initialState
        case EDIT_ITEM:
            return { ...state, [payload.name]: payload.value }
        case EDIT_DISCOUNT:
            return { ...state, discount: { ...state.discount, [payload.name]: payload.value } }
        case ADD_COLOR:
            return { ...state, oneSize: { ...state.oneSize, colors: { ...state.oneSize.colors, [payload.name]: payload.value } } }
        case UPLOAD_ITEM:
            return state;
        case REMOVE_COLOR:
            delete state.oneSize.colors[payload]
            return { ...state }
        case ADD_EXTENT:
            return { ...state, oneSize: { ...state.oneSize, extent: [...state.oneSize.extent, payload] } }
        case REMOVE_EXTENT:
            let newExtent = state.oneSize.extent.filter((ext, i) => {
                return i !== payload
            });
            return { ...state, oneSize: { ...state.oneSize, extent: newExtent } }
        case FILL_ITEM:

            return { ...payload }
        default:
            return state
    }
}

export default itemReducer;