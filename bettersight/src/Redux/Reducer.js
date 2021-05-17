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
          product.id === action.id ? {...product, incart: true} : product,
        ),
      };
    case actionType.REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.map(product =>
          product.id === action.id ? {...product, incart: false} : product,
        ),
      };
//     case actionType.ADD_QUANTITY:
//       return {
//         ...state,
//         products: state.products.map(product =>
//           product.id === action.id
//             ? {...product, quantity: product.quantity + 1}
//             : product,
//         ),
//       };
//     case actionType.SUB_QUANTITY:
//       return {
//         ...state,
//         products: state.products.map(product =>
//           product.id === action.id
//             ? {
//                 ...product,
//                 quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
//               }
//             : product,
//         ),
//       };
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