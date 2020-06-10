import axios from "axios";
import { fetching, receiveRegistraions, registEntry } from "./actions";
import mock from "../../../mocks/$mock";

const fetchRegistration = url => dispatch => {
  dispatch(fetching);
  mock();

  axios
    .get(url)
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

const entryRegistration = (url, token, payload) => dispatch => {
  dispatch(fetching);
  mock();

  axios({
    method: "post",
    url: url,
    data: payload,
    headers: { Authorization: `Bearer ${token}` },
  })
    .then(response => {
      const data = { ...response.data };
      dispatch(registEntry(data));
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      console.log("POST " + url);
    });
};

export default {
  fetchRegistration,
  entryRegistration,
};
