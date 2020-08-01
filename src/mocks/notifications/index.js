const notifications = [
  {
    notificationId: "hogehoge1",
    create_date: new Date().toISOString().slice(0, 10),
    description: "ver1をリリースしました",
  },
  {
    notificationId: "hogehoge2",
    create_date: new Date().toISOString().slice(0, 10),
    description: "ver1をリリースしました",
  },
  {
    notificationId: "hogehoge3",
    create_date: new Date().toISOString().slice(0, 10),
    description: "ver1をリリースしました",
  },
  {
    notificationId: "hogehoge4",
    create_date: new Date().toISOString().slice(0, 10),
    description: "ver1をリリースしました",
  },
  {
    notificationId: "hogehoge5",
    create_date: new Date().toISOString().slice(0, 10),
    description: "ver1をリリースしました",
  },
];

module.exports = {
  get() {
    return [200, notifications];
  },
};
