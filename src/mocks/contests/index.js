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

const contests = {
  contests: [
    {
      contest_id: "mitohato",
      contest_name: "mito_contest",
      contest_date: "2019-08-17 12:00:00",
      top_content: "# Hello World!\n## Welcome!",
      holding_status: "upcoming",
      contest_time: 120,
      writer: "mitohato",
      contest_description: "Welcome!",
      problem_number: 2,
      problems: problems,
    },
    {
      contest_id: "nemusou",
      contest_name: "nemusou_contest",
      contest_date: "2019-08-17 12:00:00",
      top_content: "# Hello World!\n## Welcome!",
      holding_status: "upcoming",
      contest_time: 120,
      writer: "mitohato",
      contest_description: "Hello World!",
      problem_number: 2,
      problems: problems,
    },
    {
      contest_id: "kurokoji",
      contest_name: "kurokoji_contest",
      contest_date: "2019-08-17 12:00:00",
      top_content: "# Hello World!\n## Welcome!",
      holding_status: "current",
      contest_time: 120,
      writer: "mitohato",
      contest_description: "Hello World!",
      problem_number: 2,
      problems: problems,
    },
    {
      contest_id: "10riridk0",
      contest_name: "10riridk0_contest",
      contest_date: "2019-08-17 12:00:00",
      top_content: "# Hello World!\n## Welcome!",
      holding_status: "recent",
      contest_time: 120,
      writer: "mitohato",
      contest_description: "Hello World!",
      problem_number: 2,
      problems: problems,
    },
  ],
};

module.exports = {
  get() {
    return [200, contests];
  },
};
