import {Dimensions, Platform, StatusBar} from 'react-native';

const android = Platform.OS === 'android';
const screen = Dimensions.get('window');
const statusBarHeight = android ? StatusBar.currentHeight : 0;

let SCREEN_WIDTH = screen.width;
let SCREEN_HEIGHT = android ? screen.height - statusBarHeight : screen.height;
SCREEN_WIDTH = SCREEN_WIDTH < SCREEN_HEIGHT ? SCREEN_WIDTH : SCREEN_HEIGHT;
SCREEN_HEIGHT = SCREEN_HEIGHT > SCREEN_WIDTH ? SCREEN_HEIGHT : SCREEN_WIDTH;

const LARGE_MARGIN = 18;
const LARGE_PADDING = 18;

const layout = {
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  LARGE_MARGIN,
  LARGE_PADDING,
};

export default layout;
