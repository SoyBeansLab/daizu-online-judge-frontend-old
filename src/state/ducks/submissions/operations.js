import axios from "axios";
import { fetching, receiveSubmissions } from "./actions";
import mock from "../../../mocks/$mock";

const submissionsOprations = url => dispatch => {
  dispatch(fetching);
  mock();

  axios
    .get(url)
    .then(response => {
      const data = { ...response.data };
      dispatch(receiveSubmissions(data));
    })
    .catch(error => {
      console.log(error); // eslint-disable-line
    })
    .finally(() => {
      console.log("GET " + url); // eslint-disable-line
    });
};

export default submissionsOprations;
