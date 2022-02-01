//call an api
import * as types from "./actionTypes";
import * as placesApi from "../../api/placesApi"; //api end point

export function loadPlacesSuccess(places) {
  return { type: types.LOAD_PLACES_SUCCESS, places };
}

//thunk
//every thunk returns function that accepts dispatch as an argument
export function loadPlaces() {
  //this function is utilize by middleware in configurestore.js
  //redux thunk injects dispactch so we do not have to.
  return function (dispatch) {
    return placesApi
      .getPlaces()
      .then((places) => {
        dispatch(loadPlacesSuccess(places));
      })
      .catch((error) => {
        throw error;
      });
  };
}
