import * as types from "../actions/actionTypes";
import initialState from "./initialState";
//the export default syntax allows to rename the function used in as an import in another file.In this case file is indexjs under reducers.
export default function placeReducer(state = initialState.places, action) {
  switch (action.type) {
    case types.LOAD_PLACES_SUCCESS:
      return action.places;

    default:
      return state;
  }
}
