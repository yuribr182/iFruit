import React, { Component } from "react";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as UserActions from "../../actions";
import { Ionicons as Ionicon } from "@expo/vector-icons";
import Images from "../../../../configs/images/";
import styles from "./styles";
import Colors from "../../../../theme/colors";

const IOS = Platform.OS === "ios";
const LOGOUT_ICON = IOS ? "ios-log-out" : "md-log-out";

class Menu extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const { usuario } = this.props;
    if (!usuario.hash) return this.props.navigation.replace("Login");
  }

  render() {
    const { logoutUser } = this.props.userActions;
    const { usuario } = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
          <View style={[styles.row, styles.profileContainer]}>
            <View style={styles.leftSide}>
              <Image source={Images.profile} style={styles.avatar} />
              <View style={styles.profileInfo}>
                <Text style={styles.name}>{usuario.nome}</Text>
                <Text style={styles.email}>{usuario.email}</Text>
              </View>
            </View>
          </View>

          <View style={styles.divider} />

          <TouchableOpacity
            activeOpacity={0.85}
            onPress={() => {
              logoutUser(() => {
                this.props.navigation.replace("Login");
              });
            }}
          >
            <View style={[styles.row, styles.setting]}>
              <View style={styles.leftSide}>
                <View style={styles.iconContainer}>
                  <Ionicon
                    name={LOGOUT_ICON}
                    color={Colors.secondaryColor}
                    size={24}
                    style={styles.iconLogout}
                  />
                </View>
                <Text style={[styles.logout, styles.mediumText]}>Sair</Text>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default connect(
  (state) => ({
    usuario: state.user.login,
  }),
  (dispatch) => ({
    userActions: bindActionCreators(UserActions, dispatch),
  })
)(Menu);
