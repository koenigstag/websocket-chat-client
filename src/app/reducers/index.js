import { combineReducers } from "redux";
import messagesSliceReducer from "./messages";

const rootReducer = combineReducers({
  // все редукторы по очереди
  messageSlice: messagesSliceReducer,
})

export default rootReducer;