import axios from "axios";
import urljoin from "url-join";
import { config } from "./config";
import mock from "./mocks/$mock";
import qs from "qs";

export const request = async (endpoint, dispatch, method = "get", data = {}) => {
  mock();
  dispatch({ type: "REQUEST_SENDING" });

  const url = urljoin(config.DEV_API_SERVER, endpoint);
  axios({
    method: method,
    url: url,
    data: qs.stringify(data),
  })
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

export const axiosClient = axios.create({ baseURL: config.DEV_API_SERVER });
