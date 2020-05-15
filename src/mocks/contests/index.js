const contests = {
  contests: [
    {
      contest_id: "mitohato",
      contest_name: "mito_contest",
      contest_date: "2019-08-17 12:00:00",
      holding_status: "upcoming",
      contest_time: 120,
      writer: "mitohato",
      contest_description: "Welcome!",
      problem_number: 2,
    },
    {
      contest_id: "nemusou",
      contest_name: "nemusou_contest",
      contest_date: "2019-08-17 12:00:00",
      holding_status: "upcoming",
      contest_time: 120,
      writer: "mitohato",
      contest_description: "Hello World!",
      problem_number: 2,
    },
    {
      contest_id: "kurokoji",
      contest_name: "kurokoji_contest",
      contest_date: "2019-08-17 12:00:00",
      holding_status: "current",
      contest_time: 120,
      writer: "mitohato",
      contest_description: "Hello World!",
      problem_number: 2,
    },
    {
      contest_id: "10riridk0",
      contest_name: "10riridk0_contest",
      contest_date: "2019-08-17 12:00:00",
      holding_status: "recent",
      contest_time: 120,
      writer: "mitohato",
      contest_description: "Hello World!",
      problem_number: 2,
    },
  ],
};

module.exports = {
  get() {
    return [200, contests];
  },
};
