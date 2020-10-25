import { combineReducers } from "redux";
import giohangReducer from "./gioHangReducer";
import userReducer from "./../../usermanagement/Module/reducer";

const rootReducer = combineReducers({
  //reducer con
  //   giohangReducer : giohangReducer,
  giohangReducer,
  userReducer,
});

export default rootReducer;
