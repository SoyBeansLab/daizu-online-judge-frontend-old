import { connect } from "react-redux";

import EntryRegistrationCardComponent from "./EntryRegistrationCardComponent";

import { registrationsOperations } from "../../state/ducks/registrations";

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  entry: registrationsOperations.entryRegistraion,
};

export default connect(mapStateToProps, mapDispatchToProps)(EntryRegistrationCardComponent);
