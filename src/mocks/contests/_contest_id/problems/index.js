const problems = contestId => {
  var result = [];
  for (var i = 0; i < 4; i++) {
    result.push({
      order: i + 1,
      problem_id: "hogehoge" + i,
      time_limit: 2,
      memory_limit: 256,
      score: 100,
      contest_id: contestId,
      problem_name: "初めての競技プログラミング",
      writer: "uchipara",
      problem_detail: "ある2つの整数aとbが与えられます. 2つの整数の和を出力してください.",
    });
  }
  return result;
};

const f = contestId => {
  const response = {
    contest_id: contestId,
    problems: problems(contestId),
  };

  return response;
};

module.exports = {
  get({ values }) {
    return [200, f(values.contest_id)];
  },
};
