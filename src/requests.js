import axios from "axios";

export const request = async (endpoint, dispatch) => {
  dispatch({ type: "REQUEST_SENDING" });

  axios
    .get(endpoint)
    .then(function(response) {
      const data = { ...response.data };
      dispatch({ type: "REQUEST_SUCCESS", data: data });
    })
    .catch(function(error) {
      dispatch({ type: "REQUEST_FAILED", data: error });
      console.log(error); //eslint-disable-line
    })
    .finally(function() {
      console.log("GET " + endpoint); //eslint-disable-line
    });
};
