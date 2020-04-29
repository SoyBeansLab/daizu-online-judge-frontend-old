import axios from "axios";
import { fetching, receiveLanguages } from "./actions";
import mock from "../../../mocks/$mock";

const contestsOprations = url => dispatch => {
  dispatch(fetching);
  mock();

  axios
    .get("/languages")
    .then(response => {
      const data = { ...response.data };
      dispatch(receiveLanguages(data));
    })
    .catch(error => {
      console.log(error); // eslint-disable-line
    })
    .finally(() => {
      console.log("GET " + url); // eslint-disable-line
    });
};

export default contestsOprations;
