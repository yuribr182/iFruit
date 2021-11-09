import { StyleSheet } from "react-native";
import Colors from '../../../../../../theme/colors';

export default StyleSheet.create({
  singleAllListProduct: {
    padding: 15,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  singleAllListProductInfo: {
    flex: 1
  },
  singleAllListProductTitle: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.15,
    color: Colors.primaryText
  },
  singleAllListProductPhoto:{
    marginRight:20
  },
  singleAllListProductDesc: {
    color: "#7a7a7a",
    fontSize: 12,
    fontWeight: "600"
  },

  singleAllListProductPrice: {
    fontWeight: '700',
    fontSize: 16,
    color: Colors.primaryColor,
  },
  businessIc: {
    width: 75,
    height: 75,
    backgroundColor: "#fff",
    borderRadius: 4,
    overflow: "hidden"
  },
  businessImg: {
    flex: 1,
    borderRadius: 40,
    overflow: "hidden"
  },
  divider:{
    height: 1,
    backgroundColor: '#ddd',
    marginHorizontal: 16
  }
});
