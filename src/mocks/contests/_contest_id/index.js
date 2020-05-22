const problems = [
  {
    order: 1,
    problem_id: "hogehoge1",
    problem_name: "Hello World1",
    time_limit: 2,
    memory_limit: 256,
    score: 100,
  },
  {
    order: 2,
    problem_id: "hogehoge2",
    problem_name: "Hello World2",
    time_limit: 2,
    memory_limit: 256,
    score: 100,
  },
  {
    order: 3,
    problem_id: "hogehoge3",
    problem_name: "Hello World3",
    time_limit: 2,
    memory_limit: 256,
    score: 100,
  },
  {
    order: 4,
    problem_id: "hogehoge4",
    problem_name: "Hello World4",
    time_limit: 2,
    memory_limit: 256,
    score: 100,
  },
];

const f = contest_id => {
  const result = {
    contest_id: contest_id,
    top_content: "# Hello World!\n## Welcome!",
    contest_name: "kurokoji_contest",
    contest_date: "2019-08-17 12:00:00",
    holding_status: "current",
    contest_time: 120,
    writer: "mitohato",
    contest_description: "Hello World!",
    problem_number: 2,
    problems: problems,
  };
  return result;
};

module.exports = {
  get({ values }) {
    return [200, f(values.contest_id)];
  },
};
