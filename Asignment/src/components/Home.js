import React from "react";
import { connect } from "react-redux";
import "../App.css";
import Button from "@material-ui/core/Button";
import { logoutUser } from "../actions";

function Home(props) {
  const handleLogout = () => {
    const { dispatch } = props;
    dispatch(logoutUser());
  };
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError,
    isAuthenticated: state.auth.isAuthenticated,
  };
}

export default connect(mapStateToProps)(Home);
