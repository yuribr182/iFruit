import { StyleSheet, Dimensions, Platform } from "react-native";
import Colors from '../../../../theme/colors';
import Layout from '../../../../theme/layout';

const ITEM_WIDTH = Layout.SCREEN_WIDTH;

export default StyleSheet.create({
  request: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,.03)"
  },
  requestKeyBoardAvoid: {
    flex: 1,
  },
  requestEmpty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: 12,
    padding: 40,
    fontWeight: "600",
    paddingTop: 30,
  },
  requestEmptyText: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 15,
    marginTop: 5,
  },
  requestEmptyBtn: {
    backgroundColor: "#00954d",
    borderRadius: 5,
    flexDirection: "row",
  },
  requestEmptyBtnCt: {
    flexDirection: "row",
    padding: 15,
  },
  requestEmptyBtnText: {
    color: "#fff",
    fontSize: 12,
    height: 20,
    paddingLeft: 5,
    lineHeight: 20,
    fontWeight: "600",
  },
  requestBtnCt: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  requestBtnText: {
    height: 20,
    lineHeight: 20,
    color: "#fff",
    fontSize: 20,
    paddingRight: 10,
    paddingLeft: 10,
    fontWeight: "700"
  },
  requestBtnRqst: {
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  requestFooter: {
    backgroundColor: "#28a745",
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:20,
    paddingRight:10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  requestFooterLeft: {
    flex: 1,
    paddingRight: 15,
  },
  requestFooterRight: {
    flexDirection: "row",
  },
  requestFooterDesc: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
  cardBack: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 1,
    backgroundColor: Colors.error,
  },
  deliveryFiltersSprt: {
    width: "100%",
    height: 1,
  },
  deleteButtonContainer: {
    width: 88,
    overflow: 'hidden',
  },
  deleteButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    backgroundColor: Colors.background,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: ITEM_WIDTH,
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  imageContainer: {
    width: 75,
    height: 75,
    borderRadius: 4,
    overflow: "hidden",
    marginRight:20
  },
  image: {
    flex: 1,
    borderRadius: 40,
    overflow: "hidden"
  },
  textContainer: {
    flex: 1,
  },
  title: {
    flex: 1,
    fontWeight: '700',
    color: Colors.primaryText,
    textAlign: 'left',
  },
  firstLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  secondLine: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 2,
  },
  thirdLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descriptionText: {
    flex: 1,
    lineHeight: 20,
    color: Colors.secondaryText,
    textAlign: 'left',
  },
  priceText: {
    fontWeight: '700',
    fontSize: 16,
    color: Colors.primaryColor,
    textAlign: 'left',
  },
  amountButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  quantity: {
    top: -1,
    paddingHorizontal: 16,
    fontSize: 16,
    color: Colors.black,
    textAlign: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    borderRadius: 14,
    width: 28,
    height: 28,
    backgroundColor: '#cacaca',
  },
  icon: {
    alignSelf: "center",
    textAlign: "center"
  }
});
