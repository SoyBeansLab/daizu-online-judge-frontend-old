const f = contest_id => {
  const result = {
    contest_id: contest_id,
    contest_top_content: "# Hello World!  ## Welcome!",
    problem_list: [
      {
        problem_id: "Hello_World",
        problem_order: "A",
        problem_name: "Hello World!",
        time_limit: 2,
        memory_limit: 256,
        problem_score: 100,
      },
      {
        problem_id: "uruu",
        problem_order: "B",
        problem_name: "is uruu?",
        time_limit: 2,
        memory_limit: 256,
        problem_score: 100,
      },
      {
        problem_id: "New_Hello_World",
        problem_order: "C",
        problem_name: "New Hello World!",
        time_limit: 2,
        memory_limit: 256,
        problem_score: 1000,
      },
    ],
  };
  return result;
};

module.exports = {
  get({ values }) {
    return [200, f(values.contest_id)];
  },
};
