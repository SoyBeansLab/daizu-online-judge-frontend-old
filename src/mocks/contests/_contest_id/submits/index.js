const submits = [
  {
    submit_id: "123456",
    submit_date: "2019-05-05",
    problem_name: "Douteki keikaku plan",
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
    language: "C++",
    score: 100,
    code_length: 100,
    result: "WJ",
    username: "nemu_sou",
    execute_time: 300,
    memory: 400,
    source_code: 'printf("HelloWorld");',
  },
];

module.exports = {
  get() {
    return [200, submits];
  },
};
