import { combineReducers } from 'redux';
import item from './itemReducer';
import allItems from './allItemsReducer';

export default combineReducers({
    item,
    allItems
});