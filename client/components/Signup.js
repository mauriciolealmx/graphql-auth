import React, { Component } from 'react';
import AuthForm from './AuthForm';
import { graphql } from 'react-apollo';
import signupMutation from '../mutations/Singup';
import currentUser from '../queries/currentUser';

class SingupFrom extends Component {
  constructor() {
    super();
    this.state = {
      errors: []
    };
  }

  onSubmit({ email, password }) {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [currentUser]
      })
      .catch(res => {
        errors = res.graphQLErrors.map(error => error.message);
        this.setState({ errors });
      });
  }

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <AuthForm
          errors={this.state.errors}
          onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    );
  }
}

export default graphql(signupMutation)(SingupFrom);
