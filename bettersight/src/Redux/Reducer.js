import * as actionType from './ActionTypes';
import { products, reviews } from '../sharedData/db.json';

const initialState = {
  products: products,
};
/////////////////// Product Reducer //////////////////////
export const ProductsRed = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.id ? 
            {...product, 
              incart: true,
              total_price: parseFloat(product.price.match(/\d+(?:\.\d+)?/g))
            }
          : product
        )
      };

    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.id ? 
            {...product, 
              incart: false
            }
          : product
        )
      };

    case actionType.ADD_QUANTITY:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.id ?
            {...product, 
              qty: product.qty + 1,
              total_price: product.total_price + parseFloat(product.price.match(/\d+(?:\.\d+)?/g)) 
            }
          : product
        )
      };

    case actionType.SUB_QUANTITY:
      return {
        ...state,
        products: state.products.map(product =>{
          const price = parseFloat(product.price.match(/\d+(?:\.\d+)?/g));
          return(
            product.id === action.id ?
              {...product, 
                qty: product.qty !== 1 ? product.qty - 1 : 1,
                total_price: product.qty > 1 ? product.total_price - price : price 
              }
            : product
          )
        })

      };
      
    case actionType.EMPTY_CART:
      return {
        ...state,
        products: state.products.map(product =>
          product.incart ? 
            {...product, 
              incart: false,
              qty: 1
            }
          : product
        )
      };

    default:
      return state;
  }
};

/////////////////// Reviews Reducer //////////////////////
export const ReviewsRed = (state = reviews, action) => {
  switch (action.type) {
      case actionType.ADD_REVIEWS:
          return state;    

      case actionType.POST_REVIEW:
        const tempState = action.payload;
        const newId = state.length;
        tempState.id = newId;

          return state = state.concat(tempState);
                  
      default:
          return state;
  }
};

/////////////////// Testimonials Reducer //////////////////////
export const TestimonialsRed = (state = [], action) => {
  switch (action.type) {
      case actionType.ADD_TESTIMONIALS:
          return action.payload;
          

      case actionType.POST_TESTIMONIAL:
        
          return state = state.concat(action.payload);
                  
      default:
          return state;
  }
};