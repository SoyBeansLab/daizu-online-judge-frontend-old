import axios from "axios";
import { fetching, receiveContests } from "./actions";
import mock from "../../../mocks/$mock";

const contestsOprations = url => dispatch => {
  dispatch(fetching);
  mock();

  axios
    .get("/contests")
    .then(response => {
      const data = { ...response.data };
      dispatch(receiveContests(data));
    })
    .catch(error => {
      console.log(error); // eslint-disable-line
    })
    .finally(() => {
      console.log("GET " + url); // eslint-disable-line
    });
};

export default contestsOprations;
