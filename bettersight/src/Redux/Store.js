import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ProductsRed, ReviewsRed, TestimonialsRed } from './Reducer';

export const appStore = () => {
    const store = createStore(
        combineReducers({
            products: ProductsRed,
            reviews: ReviewsRed,
            testimonials: TestimonialsRed
            
        }),
        applyMiddleware(thunk)
    );

    return store;
}