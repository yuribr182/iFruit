import * as types from "../../configs/actions";
import { user } from "./initialState";

export default function(state = user, action = {}) {
  switch (action.type) {
    case types.PRELOADER_PRESENT:
      return {
        ...state,
        load: state.load + 1
      };

    case types.PRELOADER_DISMISS:
      return {
        ...state,
        load: state.load - 1 <= 0 ? 0 : state.load - 1
      };

    case types.USER_AUTH:
      return {
        ...state,
        login: action.payload
      };

    case types.USER_LOGOUT:
      return {
        ...state,
        login: {
          hash: ""
        }
      };

    default:
      return state;
  }
}
