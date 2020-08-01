import { connect } from "react-redux";

import NotificationCardComponent from "./NotificationCardComponent";

import { notificationsOperations, notificationsSelectors } from "../../state/ducks/notifications";

const mapStateToProps = state => ({
  notificationList: notificationsSelectors.notificationListSelector(state),
  isFetched: notificationsSelectors.isFetched(state),
});

const mapDispatchToProps = {
  fetchNotifications: notificationsOperations,
};

export default connect(mapStateToProps, mapDispatchToProps)(NotificationCardComponent);
