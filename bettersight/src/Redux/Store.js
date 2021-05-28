import { createStore, combineReducers } from 'redux';
import { ProductsRed, ReviewsRed } from './Reducer';

export const appStore = () => {
    const store = createStore(
        combineReducers({
            products: ProductsRed,
            reviews: ReviewsRed
        })
    );

    return store;
}