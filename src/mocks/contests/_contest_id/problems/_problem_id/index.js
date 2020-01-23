const f = (contest_id, problem_id) => {
  const result = {
    contest_id: contest_id,
    problem_id: problem_id,
    problem_name: "初めての競技プログラミング",
    time_limit: 2,
    memory_limit: 2,
    score: 100,
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
