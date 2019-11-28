import axios from "axios";
import urljoin from "url-join";
import { config } from "./config";

export const request = async (endpoint, dispatch) => {
  dispatch({ type: "REQUEST_SENDING" });

  const url = urljoin(config.DEV_API_SERVER, endpoint);
  axios
    .get(url)
    .then(function(response) {
      const data = { ...response.data };
      dispatch({ type: "REQUEST_SUCCESS", data: data });
    })
    .catch(function(error) {
      dispatch({ type: "REQUEST_FAILED", data: error });
      console.log(error); //eslint-disable-line
    })
    .finally(function() {
      console.log("GET " + url); //eslint-disable-line
    });
};
