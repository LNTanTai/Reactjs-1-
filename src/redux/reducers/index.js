import { combineReducers } from "redux";
import giohangReducer from "./gioHangReducer";

const rootReducer = combineReducers({
  //reducer con
  //   giohangReducer : giohangReducer,
  giohangReducer,
});

export default rootReducer;
