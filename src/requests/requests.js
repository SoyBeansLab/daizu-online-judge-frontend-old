const axios = require("axios");
const log4js = require("log4js");

const logger = log4js.getLogger();
logger.level = process.env.DAIZU_LOGGING_LEVEL;

if (process.env.DAIZU_MOCK === "true") {
  logger.info("running mock");
  const MockAdapter = require("axios-mock-adapter");
  var mock = new MockAdapter(axios);

  const res = require("./responses.js");
  mock.onAny().reply(config => {
    const [method, url, ...response] = res.responses.shift();
    if (config.url.match(url) && config.method.toUpperCase() === method) {
      return response;
    } else {
      return [500, {}];
    }
  });
}

exports.request = async function(endpoint, method, payload, header) {  // eslint-disable-line
  return axios({
    method: method,
    url: endpoint,
    data: payload,
    headers: header,
  })
    .then(function(response) {
      logger.info(method, endpoint, response.status);
      return response.data;
    })
    .catch(function(error) {
      if (error.response) {
        // statuscodeが2XX以外
        logger.info(error.response.data);
      } else if (error.request) {
        // responseが帰ってこないとき
        logger.debug(error.request);
      } else {
        // それ以外のerror
        logger.error(error.message);
      }
      return error;
    });
};
