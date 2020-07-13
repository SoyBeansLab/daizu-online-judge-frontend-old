import React from "react";

import NotificationCardComponent from "./NotificationCardComponent";

export default {
  title: "Organisms/NotificationCard",
  component: NotificationCardComponent,
};

export const NotificationCard = () => {
  const notifications = [
    {
      notificationId: "#hogehoge1",
      date: new Date().toISOString().slice(0, 10),
      description: "ほげほげのエラーを修正しました！",
    },
    {
      notificationId: "#hogehoge2",
      date: new Date().toISOString().slice(0, 10),
      description: "ほげほげのエラーを修正しました！",
    },
    {
      notificationId: "#hogehoge3",
      date: new Date().toISOString().slice(0, 10),
      description: "ほげほげのエラーを修正しました！",
    },
  ];

  return <NotificationCardComponent notificationList={notifications} />;
};
