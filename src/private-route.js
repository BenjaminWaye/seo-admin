// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

class PrivateRoute extends React.Component {
  render() {
    console.log(this.props.currentUser);
    const { component: Component, ...rest } = this.props;
    return (
      <Route
        {...rest}
        render={(props) =>
          this.props.currentUser ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/signin", state: { from: props.location } }}
            />
          )
        }
      />
    );
  }
}

const mapStateToProps = ({ user }) => ({ currentUser: user.currentUser });

export default connect(mapStateToProps)(PrivateRoute);
