import { StyleSheet, I18nManager } from "react-native";
import Colors from '../../../../theme/colors';

const isRTL = I18nManager.isRTL;

export default StyleSheet.create({
  deliverysContainer: {
    flex: 1,
  },
  deliverysBlockDestaque: {
    paddingTop: 15,
    paddingBottom: 0,
    backgroundColor: Colors.primaryColor
  },
  inputContainer: {
    marginHorizontal: 16,
    paddingBottom: 10,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.16)',
    backgroundColor:'#fff',
    paddingLeft: 8,
    paddingRight: 51,
    height: 46,
    fontSize: 16,
    textAlignVertical: 'center',
    textAlign: isRTL ? 'right' : 'left',
  },
  deliverysSearchCancel: {
    height: 20,
    paddingRight: 6,
    position: 'absolute',
    top: 12,
    right: 45,
  },
  deliverysSearchCanceTxt: {
    color: "#888888",
    fontSize: 12,
    lineHeight: 20,
    height: 20
  },
  searchButtonContainer: {
    position: 'absolute',
    top: 4,
    right: 4,
    borderRadius: 4,
    backgroundColor: Colors.primaryColor,
    overflow: 'hidden',
  },
  searchButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 38,
    height: 38,
  },
  categoriesContainer: {
    paddingBottom: 16,
    paddingTop: 16,
  },
  cartPreloader: {
    flex: 1,
    padding: 20,
    backgroundColor: "#2d2d2d",
    justifyContent: "center"
  },
  guidedelivery: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop:30,
    marginBottom:20
  },
  deliverysBlockText: {
    height: 40,
    lineHeight: 40,
    color: "#2d2d2d",
    fontSize: 16,
    paddingRight: 15,
    fontWeight: "600"
  },
  deliverysAllList: {
    
  },
  cardImg: {borderRadius: 4},
  cardOverlay: {
    flex: 1,
    borderRadius: 4,
    overflow: 'hidden',
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cardTitle: {
    padding: 12,
    fontWeight: '500',
    fontSize: 16,
    color: Colors.white,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  card: {
    marginLeft: 8,
    width: 104,
    height: 72,
    resizeMode: 'cover',
  },
  registerKeyBoardAvoid: {
    flex: 1
  },
  deliverys:{
    flex:1
  }
});
