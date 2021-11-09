import React, { Component } from "react";
import { View } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from "lottie-react-native";
import styles from "./styles";
import * as UserActions from "../../actions";

class Intro extends Component {
  constructor() {
    super();
    this.storageRehydrate = this.storageRehydrate.bind(this);
  }

  componentDidMount() {
    this.props.navigation.addListener("focus", this.storageRehydrate);
  }

  storageRehydrate() {
    AsyncStorage.getItem("IFruitAuth", (error, result) => {
      if (!error && result) {
        let auth = JSON.parse(result);

        if (auth.hash) {
          this.props.userActions.rehydrateAuth(auth);

          setTimeout(() => {
            this.props.navigation.replace("HomeNavigator");
          }, 2500);
        } else {
          setTimeout(() => {
            this.props.navigation.replace("Login");
          }, 2500);
        }
      } else {
        setTimeout(() => {
          this.props.navigation.replace("Login");
        }, 2500);
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.animationContainer}>
          <LottieView
            style={styles.animation}
            autoPlay
            loop={true}
            source={require("../../../../images/splash.json")}
          />
        </View>
      </View>
    );
  }
}

export default connect(
  (state) => ({}),
  (dispatch) => ({
    userActions: bindActionCreators(UserActions, dispatch),
  })
)(Intro);
