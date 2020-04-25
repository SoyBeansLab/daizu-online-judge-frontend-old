import { fetching, receiveContests } from "./actions";
import { axiosClient } from "../../../requests";

const contestsOprations = url => dispatch => {
  dispatch(fetching);
  axiosClient
    .get({
      url: url,
    })
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
