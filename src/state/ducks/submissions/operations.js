import axios from "axios";
import { normalize, schema } from "normalizr";
import { fetching, receiveSubmissions, changePage } from "./actions";
import mock from "../../../mocks/$mock";

const fetchSubmissions = url => dispatch => {
  dispatch(fetching);
  mock();

  axios
    .get(url)
    .then(response => {
      const data = { ...response.data };

      const submissions = new schema.Entity("submissions", {}, { idAttribute: "submit_id" });
      const myScheme = {
        submissions: [submissions],
      };

      const normalizeData = normalize(data, myScheme);
      dispatch(receiveSubmissions(normalizeData));
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
  setSubmissionsPage,
};
