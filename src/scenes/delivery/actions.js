import axios from "react-native-axios";
import qs from "qs";

import * as types from "../../configs/actions";
import * as http from "../../configs/http";

export const fetchCategory = (callback) => {
  return dispatch => {
    dispatch({
      type: types.PRELOADER_PRESENT
    });

    dispatch({
      type: types.PRODUCT_FETCATEGORY,
      payload: []
    });

    return axios
      .get(`${http.REQUEST_URL}/category/`)
      .then(
        response => {
          dispatch({
            type: types.PRELOADER_DISMISS
          });
          
          if (!response.data.error) {
            dispatch({
              type: types.PRODUCT_FETCATEGORY,
              payload: response.data
            });

            callback(response.data.length);
          }

          return response;
        },
        response => {
          dispatch({
            type: types.PRELOADER_DISMISS
          });

          return response;
        }
      )
      .catch(error => {
        dispatch({
          type: types.PRELOADER_DISMISS
        });
      });
  };
};

export const fetchProductCategory = params => {
  return dispatch => {
    dispatch({
      type: types.PRELOADER_PRESENT
    });

    dispatch({
      type: types.DELIVERY_FETCHPRODUCTCATEGORY,
      payload: []
    });
    return axios
      .post(`${http.REQUEST_URL}/cardapio-novo-produtos/`, qs.stringify(params))
      .then(
        response => {
          dispatch({
            type: types.PRELOADER_DISMISS
          });

          if (!response.data.error) {
            dispatch({
              type: types.DELIVERY_FETCHPRODUCTCATEGORY,
              payload: response.data
            });
          }
 
          return response;
        },
        response => {
          dispatch({
            type: types.PRELOADER_DISMISS
          });

          return response;
        }
      )
      .catch(error => {
        dispatch({
          type: types.PRELOADER_DISMISS
        });
      });
  };
};

export const addProductInCart = (item, callback) => {
  return dispatch => {
    dispatch({
      type: types.DELIVERY_ADDPRODUCTINCART,
      payload: item
    });

    callback();
  };
};

export const qtdProductInCart = (position, qtd) => {
  return {
    type: types.DELIVERY_QTDPRODUCTINCART,

    payload: {
      position: position,
      qtd: qtd
    }
  };
};

export const remProductInCart = position => {
  return {
    type: types.DELIVERY_REMPRODUCTINCART,
    payload: position
  };
};