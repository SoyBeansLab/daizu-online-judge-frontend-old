import axios from "axios";
import { fetching, receiveRegistraions } from "./actions";
import mock from "../../../mocks/$mock";

const contestsOprations = url => dispatch => {
  dispatch(fetching);
  mock();

  axios
    .get("/registrations")
    .then(response => {
      const data = { ...response.data };
      dispatch(receiveRegistraions(data));
    })
    .catch(error => {
      console.log(error); // eslint-disable-line
    })
    .finally(() => {
      console.log("GET " + url); // eslint-disable-line
    });
};

export default contestsOprations;
