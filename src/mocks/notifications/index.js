const notifications = [
  {
    notificationId: "hogehoge1",
    create_date: new Date().toISOString().slice(0, 10),
    descriptioin: "ver1をリリースしました",
  },
  {
    notificationId: "hogehoge2",
    create_date: new Date().toISOString().slice(0, 10),
    descriptioin: "バグだバグだ〜〜！",
  },
  {
    notificationId: "hogehoge3",
    create_date: new Date().toISOString().slice(0, 10),
    descriptioin: "これはぴえんこえてぱおん",
  },
  {
    notificationId: "hogehoge4",
    create_date: new Date().toISOString().slice(0, 10),
    descriptioin: "ぽえーん",
  },
  {
    notificationId: "hogehoge5",
    create_date: new Date().toISOString().slice(0, 10),
    descriptioin: "fix",
  },
];

module.exports = {
  get() {
    return [200, notifications];
  },
};
