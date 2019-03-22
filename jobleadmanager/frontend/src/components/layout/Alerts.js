import React, { Component } from "react";
import { connect } from "react-redux";
import { withAlert } from "react-alert";
import PropTypes from "prop-types";

class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired
  };

  componentDidUpdate = () => {};

  render() {
    return <React.Fragment />;
  }
}
const mapStateToProps = state => ({
  error: state.errors
});

export default connect(mapStateToProps)(withAlert(Alerts));
