import { combineReducers } from 'redux';
import items from './allClothe';
import userDetail from './userDetailsReducer';
import item from './itemReducer'
export default combineReducers({
    items,
    userDetail,
    item

});