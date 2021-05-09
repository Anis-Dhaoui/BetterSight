import { products } from '../sharedData/db.json';

export const initialState = [...products];

export const Reducer = (state = initialState, action) => {
        return state
}
