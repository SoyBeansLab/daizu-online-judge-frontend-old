import axios from "axios";
import { fetching, receiveRankings, changePage } from "./actions";
import mock from "../../../mocks/$mock";

const fetchRanking = url => dispatch => {
  dispatch(fetching);
  mock();

  axios
    .get(url)
    .then(response => {
      const data = { ...response.data };
      dispatch(receiveRankings(data));
    })
    .catch(error => {
      console.log(error); // eslint-disable-line
    })
    .finally(() => {
      console.log("GET " + url); // eslint-disable-line
    });
};

const setRankingPage = page => dispatch => {
  dispatch(changePage(page));
};

export default {
  fetchRanking,
  setRankingPage,
};
