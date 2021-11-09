import { StyleSheet, Dimensions, Platform } from "react-native";
import Colors from '../../../../theme/colors';

const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
  product: {
    flex: 1,
  },
  productScroll: {
    flex: 1
  },
  productInfoHeader: {
    padding: 15,
    paddingTop: Platform.OS === 'ios' ? 60 : 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.primaryColor
  },
  productInfo: {
    paddingRight: 15,
    flex: 1,
    flexDirection: "column",
    maxWidth: width - 80
  },
  productInfoBtn: {
    paddingLeft: 15
  },
  productQtd: {
    paddingLeft:16,
    paddingRight:16,
    borderRadius: 5,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  productQtdTxt: {
    color: "#6c757d",
    fontSize: 25,
    fontWeight: "700",
  },
  productQtdRight: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    height:50,
    borderRadius: 5,
  },
  productQtdQtdLabel: {
    color: "#6c757d",
    fontSize: 20,
    fontWeight: "600",
  },
  productQtdBtn: {
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15
  },
  productFinish: {
    padding: 15,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    width: width < 400 ? 180 : 210
  },
  productFinishTxt: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
  },
  productFinishTxt2: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff"
  },
  productContentRow:{
    flexDirection: "row",
  },
  productLeft:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  businessImg: {
    flex: 1,
    borderRadius: 40,
    overflow: "hidden",
  },
  businessContent: {
    width: width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:50
  },
  businessIc: {
    width: 150,
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 75,
    overflow: "hidden"
  },
  productInfoCont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:30,
    marginLeft:16,
    marginRight:16,
    
  },
  productInfoTextCont: {
    lineHeight: 20,
    flex: 1,
    color: "#333",
    fontSize: 18,
    fontWeight: "600",
    textAlign:'justify'
  }
});