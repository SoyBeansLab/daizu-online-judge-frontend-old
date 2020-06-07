import axios from "axios";
import { fetching, receiveProblems, receiveProblem } from "./actions";
import mock from "../../../mocks/$mock";

const fetchProblems = url => dispatch => {
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

const fetchProblemById = url => dispatch => {
  dispatch(fetching);
  mock();

  axios
    .get(url)
    .then(response => {
      const data = { ...response.data };
      console.log(data);

      dispatch(receiveProblem(data));
    })
    .catch(error => {
      console.log(error); // eslint-disable-line
    })
    .finally(() => {
      console.log("GET " + url); // eslint-disable-line
    });
};

export default {
  fetchProblems,
  fetchProblemById,
};
