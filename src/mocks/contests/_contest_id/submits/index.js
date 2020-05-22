const f = (contest_id, page) => {
  const submits = {
    total: 20,
    contest_id: contest_id,
    page: page,
    submissions: [
      {
        submit_id: "123456",
        submit_date: "2019-05-05",
        problem_name: "Douteki keikaku plan" + page,
        problem_id: "hogehoge",
        language: "C++",
        score: 100,
        code_length: 100,
        result: "AC",
        username: "nemu_sou",
        execute_time: 300,
        memory: 400,
        source_code: 'printf("HelloWorld");',
      },
      {
        submit_id: "929292",
        submit_date: "2019-05-05",
        problem_name: "Hello World",
        problem_id: "hogehoge",
        language: "C++",
        score: 100,
        code_length: 100,
        result: "WA",
        username: "nemu_sou",
        execute_time: 300,
        memory: 400,
        source_code: 'printf("HelloWorld");',
      },
      {
        submit_id: "122222",
        submit_date: "2019-05-05",
        problem_name: "Douteki keikaku plan",
        problem_id: "hogehoge",
        language: "C++",
        score: 100,
        code_length: 100,
        result: "WJ",
        username: "nemu_sou",
        execute_time: 300,
        memory: 400,
        source_code: 'printf("HelloWorld");',
      },
    ],
  };
  return submits;
};

module.exports = {
  get({ values, params }) {
    return [200, f(values.contest_id, params.page)];
  },
};
