const f = (contest_id, submit_id) => {
  return {
    contest_id: contest_id,
    submit_id: submit_id,
    submit_date: "2019-05-05",
    problem_name: "Douteki keikaku plan",
    problem_id: "hogehoge",
    language: "C++",
    score: 100,
    code_size: 100,
    result: "AC",
    username: "nemu_sou",
    execute_time: 300,
    memory: 400,
    all_test_case: 10,
    passed_test_case: 10,
    source_code: 'printf("HelloWorld");',
  };
};

module.exports = {
  get({ values }) {
    return [200, f(values.contest_id, values.submits_id)];
  },
};
