import { combineReducers } from 'redux';

import productReducer from './productSlicer';

const rootReducer = combineReducers({
    products: productReducer
});

export default rootReducer;