import axios from "axios";
import { normalize, schema } from "normalizr";
import { fetching, receiveContests, receiveContest, fetchFailed } from "./actions";
import mock from "../../../mocks/$mock";

const fetchContests = url => dispatch => {
  dispatch(fetching);
  mock();

  axios
    .get(url)
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
      dispatch(fetchFailed(error));
    })
    .finally(() => {
      console.log("GET " + url); // eslint-disable-line
    });
};

const fetchContest = url => dispatch => {
  dispatch(fetching);
  mock();

  axios
    .get(url)
    .then(response => {
      const data = { ...response.data };

      dispatch(receiveContest(data));
    })
    .catch(error => {
      dispatch(fetchFailed(error));
    })
    .finally(() => {
      console.log("GET " + url); // eslint-disable-line
    });
};

export default {
  fetchContests,
  fetchContest,
};
