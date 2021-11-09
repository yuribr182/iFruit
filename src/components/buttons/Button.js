import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
  Text,
} from "react-native";
import { FontAwesome as FAIcon } from "@expo/vector-icons";
import Colors from "../../theme/colors";
import Layout from "../../theme/layout";

const BUTTON_BORDER_RADIUS = 4;
const BUTTON_HEIGHT = 48;
const BUTTON_WIDTH = "100%";
const BUTTON_HEIGHT_SM = 40;
const BUTTON_WIDTH_SM = Layout.SCREEN_WIDTH / 2.2;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryGradientColor,
    borderRadius: BUTTON_BORDER_RADIUS,
  },
  defaultContainer: {
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
  },
  smallContainer: {
    maxWidth: BUTTON_WIDTH_SM,
    height: BUTTON_HEIGHT_SM,
    paddingHorizontal: 16,
  },
  disabled: {
    opacity: 0.72,
  },
  socialIconContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: 52,
  },
  outlined: {
    borderWidth: 2,
    borderColor: Colors.primaryGradientColor,
    backgroundColor: "transparent",
  },
  rounded: {
    borderRadius: BUTTON_HEIGHT / 2,
  },
  title: {
    color: Colors.onPrimaryColor,
  },
  outlinedTitle: {
    color: Colors.primaryGradientColor,
  },
});

type Props = {
  onPress: () => void,
  disabled: boolean,
  activeOpacity: number,
  height: number,
  buttonStyle: ViewStyle,
  borderRadius: number,
  borderColor: string,
  color: string,
  iconColor: string,
  socialIconName: string,
  small: boolean,
  title: string,
  titleColor: string,
  rounded: boolean,
  outlined: boolean,
};

const Button = ({
  onPress,
  disabled,
  activeOpacity = 0.85,
  height,
  buttonStyle,
  borderRadius,
  borderColor,
  color,
  iconColor,
  socialIconName,
  small,
  title,
  titleColor,
  rounded,
  outlined,
}: Props) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    activeOpacity={activeOpacity}
    style={[
      styles.container,
      borderRadius && { borderRadius },
      color && { backgroundColor: color },
      styles.defaultContainer,
      height && { height },
      small && styles.smallContainer,
      rounded && styles.rounded,
      outlined && styles.outlined,
      height && rounded && { borderRadius: height / 2 },
      borderColor && { borderColor },
      disabled && styles.disabled,
      buttonStyle,
    ]}
  >
    {socialIconName && (
      <View style={styles.socialIconContainer}>
        <FAIcon name={socialIconName} size={20} color={iconColor} />
      </View>
    )}
    <Text
      style={[
        styles.title,
        outlined && styles.outlinedTitle,
        titleColor && { color: titleColor },
      ]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

export default Button;
