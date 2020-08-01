import { createSelector } from "reselect";

const notificationsSelector = state => state.notificationsState.notifications.data || [];

const notificationListSelector = createSelector(notificationsSelector, notifications => Object.values(notifications));

const isFetched = createSelector(notificationsSelector, notifications => Object.keys(notifications).length !== 0);

export default {
  notificationListSelector,
  isFetched,
};
