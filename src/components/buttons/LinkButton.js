import React from "react";
import { StyleSheet, TextStyle, Text } from "react-native";
import Colors from "../../theme/colors";

const styles = StyleSheet.create({
  title: {
    padding: 2,
    color: Colors.primaryColor,
  },
});

type Props = {
  onPress: () => void,
  title: string,
  titleStyle: TextStyle,
};

const LinkButton = ({ onPress, title, titleStyle }: Props) => (
  <Text onPress={onPress} style={[styles.title, titleStyle]}>
    {title}
  </Text>
);

export default LinkButton;
