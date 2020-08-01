import axios from "axios";
import { fetching, receiveNotifications } from "./actions";
import mock from "../../../mocks/$mock";

const notificationsOprations = url => dispatch => {
  dispatch(fetching);
  mock();

  axios
    .get("/notifications")
    .then(response => {
      const data = { ...response.data };
      dispatch(receiveNotifications(data));
    })
    .catch(error => {
      console.log(error); // eslint-disable-line
    })
    .finally(() => {
      console.log("GET " + url); // eslint-disable-line
    });
};

export default notificationsOprations;
