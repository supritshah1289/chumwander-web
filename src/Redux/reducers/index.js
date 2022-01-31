//creating a root reducer file to place all reducers together
import { combineReducers } from "redux";
import places from "./placeReducer";

const rootReducer = combineReducers({
  places: places,
});

export default rootReducer;
