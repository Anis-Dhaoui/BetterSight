import { createStore } from 'redux';
import { Reducer } from './Reducer';

export const appStore = () => {
    const store = createStore(
        Reducer
    );

    return store;
}