import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createForms } from 'react-redux-form';
import { ProductsRed, ReviewsRed, TestimonialsRed } from './Reducer';

export const appStore = () => {
    const store = createStore(
        combineReducers({
            products: ProductsRed,
            reviews: ReviewsRed,
            testimonials: TestimonialsRed,
            ...createForms({
                testimonial: {
                    first_name: "Test",
                    last_name: "Testest",
                    feedback: "Testestestestestestestestestestestestestestestestestestestestestestestestestest"
                }
            })
        }),
        applyMiddleware(thunk)
    );  

    return store;
};