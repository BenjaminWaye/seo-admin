import React, { Component } from "react";

import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

import SignUp from "./../../components/sign-up/sign-up.component";
import SignIn from "./../../components/sign-in/sign-in.component";

class SignInAndSignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: true,
    };
  }

  switchModal = () => {
    this.setState({ signUp: !this.state.signUp });
  };

  render() {
    return (
      <div>
        <Container component="main" maxWidth="xs">
          {this.state.signUp ? (
            <SignUp switchToSignIn={this.switchModal} />
          ) : (
            <SignIn switchToSignUp={this.switchModal} />
          )}
          <Box mt={5}></Box>
        </Container>
      </div>
    );
  }
}

export default SignInAndSignUpPage;
