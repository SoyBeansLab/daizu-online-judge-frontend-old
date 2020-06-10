const getRegistration = contestId => {
  const result = {
    contest_id: contestId,
    is_registed: true,
  };
  return result;
};

const postRegistration = (contestId, header, params) => {
  console.log(contestId, header, params);
  const result = {
    contest_id: contestId,
    is_registed: true,
  };
  return result;
};

module.exports = {
  get({ values }) {
    return [200, getRegistration(values.contest_id)];
  },

  post({ values, header, params }) {
    return [200, postRegistration(values.contest_id, header, params)];
  },
};
