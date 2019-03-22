import React, { Component } from "react";
import { connect } from "react-redux";
import { withAlert } from "react-alert";
import PropTypes from "prop-types";

class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  };

  componentDidUpdate = prevProps => {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.message.name) alert.error(`Name: ${error.message.name.join()}`);
      if (error.message.email)
        alert.error(`Email: ${error.message.email.join()}`);
      if (error.message.message)
        alert.error(`Message: ${error.message.message.join()}`);
    }

    if (message !== prevProps.message) {
      if (message.leadDeleted) alert.success(message.leadDeleted);
      if (message.leadAdded) alert.success(message.leadAdded);
    }
  };

  render() {
    return <React.Fragment />;
  }
}
const mapStateToProps = state => ({
  error: state.errorsReducer,
  message: state.messagesReducer
});

export default connect(mapStateToProps)(withAlert(Alerts));
