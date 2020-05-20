import axios from "axios";
import { normalize, schema } from "normalizr";
import { fetching, receiveProblems } from "./actions";
import mock from "../../../mocks/$mock";

const problemsOprations = url => dispatch => {
  dispatch(fetching);
  mock();

  axios
    .get(url)
    .then(response => {
      const data = { ...response.data };

      const problems = new schema.Entity("problems", {}, { idAttribute: "contest_id" });

      const myScheme = {
        problems: [problems],
      };
      const normalizeData = normalize(data, myScheme);
      dispatch(receiveProblems(normalizeData));
    })
    .catch(error => {
      console.log(error); // eslint-disable-line
    })
    .finally(() => {
      console.log("GET " + url); // eslint-disable-line
    });
};

export default problemsOprations;
