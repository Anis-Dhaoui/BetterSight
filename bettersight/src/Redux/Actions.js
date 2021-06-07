import * as actionType from './ActionTypes';
import {url} from '../sharedData/Url';

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

/////////////////////////////////{ FETCH TESTIMONIALS }/////////////////////////////////
export const fetchTestimonials = () => (dispatch) =>{
    fetch(url + 'testimonials')
    .then(res => {
        if(res.ok){
            return res;
        }else
        var error = new Error('Error ' + res.status + ' ' + res.statusText);
        throw error;
    }, error =>{
    var disconnected = new Error('Error ' + error.message + ' (Cannot connect to the server)')
    throw disconnected
    })
    .then(res => res.json())
    .then(data => dispatch(addTestimonials(data)))
    .catch(error => {alert('Error:\n' + error.message)})
};

export const addTestimonials = (testimonials) =>({
    type: actionType.ADD_TESTIMONIALS,
    payload: testimonials
});

/////////////////////////////////{ POST TESTIMONIAL }/////////////////////////////////
export const postTestimonial = (testimonial) => (dispatch) =>{

    // const file = testimonial.photo[0];
    // const formData = new FormData();
    // formData.append('img', file);

    // fetch("",
    //     {
    //         method: 'POST',
    //         body: formData,
    //         // headers: {
    //         //   'Content-Type': 'multipart/form-data',
    //         // }
    //     }
    // )
    // .then(res =>{
    //     console.log(res.status);
    // })

    var tempVar = JSON.parse(JSON.stringify(testimonial)) //This line for changing the object from not extensible to extensible or Read only properties to rewritable properties
    let photoPath = testimonial.photo[0].name;
    tempVar.photo = photoPath;

    fetch(url + 'testimonials', {
        method: 'POST',
        body: JSON.stringify(tempVar),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'same-origin'
    })
    .then(res => {
        if(res.ok){
            return res;
        }else
        var error = new Error('Error ' + res.status + ' ' + res.statusText);
        throw error;
    }, error =>{
    var disconnected = new Error('Error ' + error.message + ' (Cannot connect to the server)')
    throw disconnected
    })
    .then(res => res.json())
    .then(data => dispatch(postNewTestimonial(data)))
    .catch(error => {alert('Error:\n' + error.message)})
};

export const postNewTestimonial = (testimonial) =>({
    type: actionType.POST_TESTIMONIAL,
    payload: testimonial
});