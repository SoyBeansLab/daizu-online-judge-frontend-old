const ranking = [
  {
    rank: 1,
    user_id: "mitohato",
    total: "5/5",
    score: "5000",
  },
  {
    rank: 2,
    user_id: "222mitohato",
    total: "5/5",
    score: "5000",
  },
  {
    rank: 3,
    user_id: "fdmitohato",
    total: "2/5",
    score: "1000",
  },
  {
    rank: 4,
    user_id: "0mitohato",
    total: "0/5",
    score: "0",
  },
  {
    rank: 5,
    user_id: "mitohato",
    total: "5/5",
    score: "5000",
  },
  {
    rank: 6,
    user_id: "222mitohato",
    total: "5/5",
    score: "5000",
  },
  {
    rank: 7,
    user_id: "fdmitohato",
    total: "2/5",
    score: "1000",
  },
  {
    rank: 8,
    user_id: "0mitohato",
    total: "0/5",
    score: "0",
  },
  {
    rank: 9,
    user_id: "fdmitohato",
    total: "2/5",
    score: "1000",
  },
  {
    rank: 10,
    user_id: "0mitohato",
    total: "0/5",
    score: "0",
  },
];

module.exports = {
  get() {
    return [200, ranking];
  },
};
