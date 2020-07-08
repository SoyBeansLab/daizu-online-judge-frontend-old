import { connect } from "react-redux";

import EntryRegistrationCardComponent from "./EntryRegistrationCardComponent";

import { registrationsOperations } from "../../state/ducks/registrations";

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  entry: registrationsOperations.entryRegistration,
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryRegistrationCardComponent);
