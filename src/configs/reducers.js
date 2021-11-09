import { combineReducers } from "redux";

import user from "../scenes/user/reducer";
import delivery from "../scenes/delivery/reducer";

export default combineReducers({
  user,
  delivery
});
