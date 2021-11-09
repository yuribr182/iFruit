import { StyleSheet } from "react-native";
import Colors from "../../../../theme/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  contentContainerStyle: {
    paddingBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  profileContainer: {
    paddingVertical: 16,
  },
  leftSide: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 60 / 2,
  },
  profileInfo: {
    paddingLeft: 16,
  },
  name: {
    fontWeight: "700",
    textAlign: "left",
  },
  email: {
    paddingVertical: 2,
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginHorizontal: 16,
  },
  setting: {
    height: 56,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    width: 28,
    height: 28,
  },
  iconLogout: {
    alignSelf: "center",
    textAlign: "center"
  },
  logout: { 
    color: Colors.secondaryColor 
  },
  mediumText: {
    fontWeight: "500",
  }
});
