import axios from "axios";
import { normalize, schema } from "normalizr";
import { fetching, receiveContests } from "./actions";
import mock from "../../../mocks/$mock";

const contestsOprations = url => dispatch => {
  dispatch(fetching);
  mock();

  axios
    .get("/contests")
    .then(response => {
      const data = { ...response.data };

      const contests = new schema.Entity("contests", {}, { idAttribute: "contest_id" });

      const myScheme = {
        contests: [contests],
      };
      const normalizeData = normalize(data, myScheme);
      dispatch(receiveContests(normalizeData));
    })
    .catch(error => {
      console.log(error); // eslint-disable-line
    })
    .finally(() => {
      console.log("GET " + url); // eslint-disable-line
    });
};

export default contestsOprations;
