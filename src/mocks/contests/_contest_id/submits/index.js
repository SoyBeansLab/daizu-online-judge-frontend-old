const randomStr = N => {
  var S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return Array.from(Array(N))
    .map(() => S[Math.floor(Math.random() * S.length)])
    .join("");
};

const randomChoiceJudgeStatus = () => {
  const list = ["AC", "WA", "WJ", "TLE", "RE", "MLE"];
  const idx = Math.floor(Math.random() * list.length);
  return list[idx];
};

const submissions = (contest_id, page) => {
  const result = [];
  for (var i = 0; i < 10; i++) {
    const id = randomStr(7);
    const submission = {
      submit_id: id,
      submit_date: "2019-05-05",
      problem_name: "Douteki keikaku plan" + page,
      problem_id: "hogehoge",
      language: "C++",
      score: 100,
      code_length: 100,
      result: randomChoiceJudgeStatus(),
      username: "nemu_sou " + contest_id,
      execute_time: 300,
      memory: 400,
      source_code: 'printf("HelloWorld");',
    };
    result.push(submission);
  }
  return result;
};

const f = (contest_id, page) => {
  const submits = {
    total: 30,
    contest_id: contest_id,
    page: page,
    submissions: submissions(contest_id, page),
  };
  return submits;
};

module.exports = {
  get({ values, params }) {
    return [200, f(values.contest_id, params.page)];
  },

  post({ values }) {
    const submitsId = randomStr(7);
    const link = `/contests/${values.contest_id}/submits/${submitsId}`;

    return [201, { link: link }];
  },
};
