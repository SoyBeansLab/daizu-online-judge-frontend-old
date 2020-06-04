import axios from "axios";
import { fetching, receiveSubmission, receiveSubmissions, changePage } from "./actions";
import mock from "../../../mocks/$mock";

const fetchSubmissions = url => dispatch => {
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

const fetchSubmission = url => dispatch => {
  dispatch(fetching);
  mock();

  axios
    .get(url)
    .then(response => {
      const data = { ...response.data };

      dispatch(receiveSubmission(data));
    })
    .catch(error => {
      console.log(error); // eslint-disable-line
    })
    .finally(() => {
      console.log("GET " + url); // eslint-disable-line
    });
};

const setSubmissionsPage = page => dispatch => {
  dispatch(changePage(page));
};

export default {
  fetchSubmissions,
  fetchSubmission,
  setSubmissionsPage,
};
