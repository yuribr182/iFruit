import React, { Component } from "react";
import axios from "react-native-axios";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "./src/configs/reducers";
import * as http from "./src/configs/http";
import MainNavigator from './src/navigation/MainNavigator';

axios.defaults.headers.common["Content-Type"] = "application/x-www-form-urlencoded";
axios.defaults.headers.common["Mpauth"] = http.REQUEST_AUTH;

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);


export default class App extends Component {
  constructor() {
    super();
  }
  
  componentDidMount() {
    store.subscribe(() => {
      const token = store.getState().user.login.hash;

      token ? axios.defaults.headers.common["Passport"] = token : axios.defaults.headers.common["Passport"] = null;
      
    });
  }

  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}