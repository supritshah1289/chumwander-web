import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.REACT_APP_API_URL + "places/";

export function getPlaces() {
  console.log("Currently in getPlaces() in placesApi.js");
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

//if course exists then edit and save else create a new using post method
export function savePlace(place) {
  return fetch(baseUrl + (place.id || ""), {
    method: place.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(place),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deletePlace(placeId) {
  return fetch(baseUrl + placeId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
