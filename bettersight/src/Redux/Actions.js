import * as actionType from './ActionTypes';

export const addToCart = id => {
    return {
        type: actionType.ADD_TO_CART,
        id
    };
    
};

export const removeFromCart = id => {
    return {
        type: actionType.REMOVE_FROM_CART,
        id,
    };
};

export const addQuantity = id => {
    return {
        type: actionType.ADD_QUANTITY,
        id,
    };
};

export const subtractQuantity = id => {
    return {
        type: actionType.SUB_QUANTITY,
        id,
    };
};

export const emptyCart = () => {
    return {
        type: actionType.EMPTY_CART,
    };
};