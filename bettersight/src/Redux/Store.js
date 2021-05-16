import { createStore, combineReducers } from 'redux';
import { ProductsRed } from './Reducer';

export const appStore = () => {
    const store = createStore(
        combineReducers({
            products: ProductsRed
        })
    );

    return store;
}