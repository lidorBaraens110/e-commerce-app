import { combineReducers } from 'redux';
import items from './allClothe';
import userDetail from './userDetailsReducer';

export default combineReducers({
    items,
    userDetail
});