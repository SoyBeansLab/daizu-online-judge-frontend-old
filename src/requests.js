const axios = require("axios");
const log4js = require("log4js");

const logger = log4js.getLogger();
logger.level = process.env.DAIZU_LOGGING_LEVEL;

async function request(endpoint, method, payload) {  // eslint-disable-line
  axios({
    method: method,
    url: endpoint,
    data: payload,
  })
    .then(function(response) {
      return response;
    })
    .catch(function(error) {
      if (error.response) {
        // statuscodeが2XX以外
        logger.debug(error.response.data);
      } else if (error.request) {
        // responseが帰ってこないとき
        logger.debug(error.request);
      } else {
        // それ以外のerror
        logger.error(error.message);
      }
      return error;
    });
}
