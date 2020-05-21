import axios from "axios";
import { fetching, receiveProblems } from "./actions";
import mock from "../../../mocks/$mock";

const problemsOprations = url => dispatch => {
  dispatch(fetching);
  mock();

  axios
    .get(url)
    .then(response => {
      const data = { ...response.data };

      dispatch(receiveProblems(data));
    })
    .catch(error => {
      console.log(error); // eslint-disable-line
    })
    .finally(() => {
      console.log("GET " + url); // eslint-disable-line
    });
};

export default problemsOprations;
