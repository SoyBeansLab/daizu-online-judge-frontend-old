const f = (contestId, problemId) => {
  const result = {
    order: 1,
    problem_id: problemId,
    time_limit: 2,
    memory_limit: 256,
    score: 100,
    contest_id: contestId,
    problem_name: "初めての競技プログラミング",
    writer: "uchipara",
    problem_detail: "ある2つの整数aとbが与えられます. 2つの整数の和を出力してください.",
  };

  return result;
};

module.exports = {
  get({ values }) {
    return [200, f(values.contest_id, values.problem_id)];
  },
};
