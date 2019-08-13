const axios = require("axios");

async function contests() {
  try {
    const response = await axios.get("/contests");

    return response;
  } catch (error) {
    return error;
  }
}

async function contest_top(contest_id) {
  try {
    const endpoint = "/contests/" + contest_id + "/top";
    const response = await axios.get(endpoint);

    return response;
  } catch (error) {
    return error;
  }
}

async function contest_problems(contest_id) {
  try {
    const endpoint = "/contests/" + contest_id + "/problems";
    const response = await axios.get(endpoint);

    return response;
  } catch (error) {
    return error;
  }
}

async function contest_problem(contest_id, problem_id) {
  try {
    const endpoint = "/contests/" + contest_id + "/problems/" + problem_id;
    const response = await axios.get(endpoint);

    return response;
  } catch (error) {
    return error;
  }
}

async function contest_submittions(contest_id) {
  try {
    const endpoint = "/contests/" + contest_id + "/submittions";
    const response = await axios.get(endpoint);

    return response;
  } catch (error) {
    return error;
  }
}
