import { combineReducers } from 'redux';
import productsReducer from './productsReducer';
import categoryReducer from './categoryReducer';
import cartReducer from './cartReducer';
import favouriteReducer from './favouriteReducer';

export default combineReducers({
    products:productsReducer,
    category:categoryReducer,
    cart:cartReducer,
    favourite:favouriteReducer
});