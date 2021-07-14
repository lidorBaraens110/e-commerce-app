import { combineReducers } from 'redux';
import userDetail from './userDetailsReducer';
import WishListReducer from './wishListReducer'
import cartReducer from './cartReducer';
import cartToggle from './cartToggle';
import isPurchaseDone from './isPurchaseDone';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import { CookieStorage } from 'redux-persist-cookie-storage'
import Cookies from 'cookies-js'


const reducers = combineReducers({
    userDetail,
    wishList: WishListReducer,
    cart: cartReducer,
    cartToggle,
    isPurchaseDone
});

const persistConfig = {
    key: "root",
    storage: new CookieStorage(Cookies/*, options */)
}

const persistedReducer = persistReducer(persistConfig, reducers)
let store = createStore(persistedReducer)
let persistor = persistStore(store)
export { store, persistor }
