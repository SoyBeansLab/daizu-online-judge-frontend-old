const f = (contest_id, page) => {
  var result = [];
  for (var i = 0; i < 10; i++) {
    const ranking = {
      rank: i + 1,
      user_id: "mitohato " + contest_id + page,
      total: "5/5",
      score: "5000",
    };
    result.push(ranking);
  }

  return {
    total: 30,
    ranking: result,
  };
};

module.exports = {
  get({ values, params }) {
    return [200, f(values.contest_id, params.page)];
  },
};
