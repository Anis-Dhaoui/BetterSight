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

export const addReviews = () =>({
    type: actionType.ADD_REVIEWS
});

export const postNewReview = (prodId, firstName, lastName, email, comment, date, rating) => ({
    type: actionType.POST_REVIEW,
    payload: {
        product_id: prodId,
        first_name: firstName,
        last_name: lastName,
        email: email,
        comment: comment,
        date:  date,
        rating: rating
    }
});