// requireのpathは適宜直す
const request = require("./requests.js").request;

// endpoint, method, payload, headerを渡してrequestを投げる
request("/languages", "GET", {}, {}).then(data => {
  // eslint-disable-line はconsole.logの警告を消すために置いてるだけ
  console.log(data);  // eslint-disable-line
});
