import { StyleSheet, Dimensions, Platform } from "react-native";
import Colors from '../../../../theme/colors';
import Layout from '../../../../theme/layout';

const { height } = Dimensions.get("window");
const PLACEHOLDER_TEXT_COLOR = 'rgba(0, 0, 0, 0.4)';
const INPUT_BORDER_COLOR = 'rgba(0, 0, 0, 0.2)';

export default StyleSheet.create({
  screenContainer: {
    flexGrow: 1,
    backgroundColor: Colors.background,
  },
  contentContainerStyle: { 
    flexGrow: 1, 
    paddingTop: Platform.OS === 'ios' ? 70 : 0
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  form: {
    paddingHorizontal: Layout.LARGE_PADDING,
  },
  inputContainer: {
    marginBottom: 7
  },
  buttonContainer: {
    paddingTop: 23
  },
  separator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    width: 64,
    height: 1,
    backgroundColor: INPUT_BORDER_COLOR,
  },
  orText: {
    top: -2,
    paddingHorizontal: 8,
    color: PLACEHOLDER_TEXT_COLOR,
  },
  buttonsGroup: {
    paddingTop: 23,
  },
  modalWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.52)',
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 20,
    width: Layout.SCREEN_WIDTH - 3 * Layout.LARGE_MARGIN,
    borderRadius: 4,
    backgroundColor: Colors.background,
  },
  title: {
    marginBottom: 4,
    fontWeight: '700',
    fontSize: 18,
    color: Colors.primaryText,
  },
  message: {
    marginBottom: 16,
    padding: 8,
    fontWeight: '400',
    color: Colors.secondaryText,
    textAlign: 'center',
  },
  registerFormIptBlock: {
    paddingLeft: height < 800 ? 5 : 15,
    paddingRight: height < 800 ? 5 : 15,
    paddingBottom: height < 800 ? 5 : 15,
    paddingTop: height < 800 ? 5 : 15,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderRightWidth:0,
    borderLeftWidth:0,
    borderTopWidth:0,
    borderColor: "#ced4da",
    alignItems: "center",
    marginBottom: 10
  },
  registerFormIpt: {
    fontSize: 12,
    width: "80%",
    fontWeight: "600"
  },
  buttonContainer: {
    marginTop: 12,
    marginBottom: 24,
    width: '100%',
  },
  button: {
    borderRadius: 4,
  }
});
