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

      const current = new schema.Entity("current", {}, { idAttribute: "contest_id" });
      const upcoming = new schema.Entity("upcoming", {}, { idAttribute: "contest_id" });
      const recent = new schema.Entity("recent", {}, { idAttribute: "contest_id" });

      const myScheme = new schema.Entity("contests", {
        current: [current],
        upcoming: [upcoming],
        recent: [recent],
      });
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
