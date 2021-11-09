import axios from "react-native-axios";
import qs from "qs";
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as types from "../../configs/actions";
import * as http from "../../configs/http";

export const userAuth = (params, callback) => {
  return (dispatch) => {
    dispatch({
      type: types.PRELOADER_PRESENT,
    });

    return axios
      .post(`${http.REQUEST_URL}/autenticacao`, qs.stringify(params))
      .then(
        async (response) => {
          if (!response.data.error) {
            dispatch({
              type: types.USER_AUTH,
              payload: response.data,
            });
            await AsyncStorage.setItem(
              "IFruitAuth",
              JSON.stringify(response.data),
              () => {
                setTimeout(() => {
                  dispatch({
                    type: types.PRELOADER_DISMISS,
                  });

                  callback(response.data);
                }, 500);
              }
            );
          } else {
            dispatch({
              type: types.PRELOADER_DISMISS,
            });

            Alert.alert("Falha na autenticação", response.data.message);
          }

          return response;
        },
        (response) => {
          dispatch({
            type: types.PRELOADER_DISMISS,
          });

          return response;
        }
      )
      .catch(() => {
        dispatch({
          type: types.PRELOADER_DISMISS,
        });
      });
  };
};

export const userRecovery = (params, callback) => {
  return (dispatch) => {
    dispatch({
      type: types.PRELOADER_PRESENT,
    });

    return axios
      .post(
        `${http.REQUEST_URL}/recuperacao`,

        qs.stringify(params)
      )
      .then(
        (response) => {
          dispatch({
            type: types.PRELOADER_DISMISS,
          });

          if (!response.data.error) {
            Alert.alert(
              "Recuperação de dados de acesso",
              response.data.message,
              [
                {
                  text: "Continuar",
                  onPress: () => {
                    callback();
                  },
                },
              ]
            );
          } else {
            Alert.alert(
              "Falha na recuperação dos dados!",
              response.data.message
            );
          }

          return response;
        },
        (response) => {
          dispatch({
            type: types.PRELOADER_DISMISS,
          });

          return response;
        }
      )
      .catch((error) => {
        dispatch({
          type: types.PRELOADER_DISMISS,
        });
      });
  };
};

export const userRegister = (params, callback) => {
  return (dispatch) => {
    dispatch({
      type: types.PRELOADER_PRESENT,
    });

    return axios
      .post(
        `${http.REQUEST_URL}/cadastro`,

        qs.stringify(params)
      )
      .then(
        async (response) => {
          if (!response.data.error) {
            dispatch({
              type: types.USER_AUTH,
              payload: response.data,
            });

            AsyncStorage.setItem(
              "IFruitAuth",
              JSON.stringify(response.data),
              () => {
                setTimeout(() => {
                  dispatch({
                    type: types.PRELOADER_DISMISS,
                  });

                  Alert.alert(
                    "Cadastro finalizado com sucesso!",
                    "",
                    [
                      {
                        text: "Continuar",
                        onPress: () => {
                          callback();
                        },
                      },
                    ]
                  );
                }, 500);
              }
            );
          } else {
            dispatch({
              type: types.PRELOADER_DISMISS,
            });

            Alert.alert("Falha na autenticação", response.data.message);
          }

          return response;
        },
        (response) => {
          dispatch({
            type: types.PRELOADER_DISMISS,
          });

          return response;
        }
      )
      .catch((error) => {
        dispatch({
          type: types.PRELOADER_DISMISS,
        });
      });
  };
};

export const rehydrateAuth = (auth) => {
  return (dispatch) => {
    dispatch({
      type: types.USER_AUTH,
      payload: auth,
    });
  };
};

export const logoutUser = (callback) => {
  return (dispatch) => {
    dispatch({
      type: types.USER_LOGOUT,
    });

    AsyncStorage.removeItem("IFruitAuth", () => {});

    callback();
  };
};