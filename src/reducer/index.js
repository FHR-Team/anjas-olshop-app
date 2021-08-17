import { combineReducers } from 'redux';

import productReducer from './productSlicer';
import cartReducer from './cartSlicer';

const rootReducer = combineReducers({
    products: productReducer,
    carts: cartReducer
});

export default rootReducer;