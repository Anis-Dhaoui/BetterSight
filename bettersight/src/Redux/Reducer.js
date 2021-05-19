import * as actionType from './ActionTypes';
import { products } from '../sharedData/db.json';

// export const initialState = [...products];

// export const ProductsRed = (state = initialState, action) => {
//             return state;
// };

const initialState = {
  products: products,
};
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
      
//     case actionType.EMPTY_CART:
//       return {
//         ...state,
//         products: state.products.map(product =>
//           product.selected
//             ? {...product, selected: false, quantity: 1}
//             : product,
//         ),
//       };
    default:
      return state;
  }
};