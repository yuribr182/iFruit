import * as types from "../../configs/actions";
import { delivery } from "./initialState";

export default function(state = delivery, action = {}) {
  switch (action.type) {
    
    case types.PRELOADER_PRESENT:
      return {
        ...state,
        load: state.load + 1
      };

    case types.PRELOADER_DISMISS:
      return {
        ...state,
        load: state.load - 1 <= 0 ? 0 : state.load - 1
      };

    case types.PRODUCT_FETCATEGORY:
      return {
        ...state,
        category: action.payload
      };
    
    case types.DELIVERY_FETCHPRODUCTCATEGORY:
      return {
        ...state,
        produtosCategory: action.payload
      };

    case types.DELIVERY_ADDPRODUCTINCART:
      return {
        ...state,
        carrinho: [action.payload, ...state.carrinho]
      };

    case types.DELIVERY_QTDPRODUCTINCART:
      return {
        ...state,
        carrinho: state.carrinho.map(item => {
          if (state.carrinho.indexOf(item) === action.payload.position) {
            item.quantidade = action.payload.qtd;
          }

          return item;
        })
      };

    case types.DELIVERY_REMPRODUCTINCART:
      return {
        ...state,
        carrinho: state.carrinho.filter(item => {
          return state.carrinho.indexOf(item) !== action.payload;
        })
      };

    default:
      return state;
  }
}
