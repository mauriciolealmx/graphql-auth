import React, { Component } from 'react';
import AuthForm from './AuthForm';
import { graphql } from 'react-apollo';
import signupMutation from '../mutations/Singup';
import currentUser from '../queries/currentUser';
import { hashHistory } from 'react-router';

class SingupFrom extends Component {
  constructor() {
    super();
    this.state = {
      errors: []
    };
  }

  componentWillUpdate(nextProps) {
    // The user was not logged in but now is.
    if (!this.props.data.user && nextProps.data.user) {
      hashHistory.push('/dashboard');
    }
  }

  onSubmit({ email, password }) {
    this.props
      .mutate({
        variables: { email, password },
        refetchQueries: [currentUser]
      })
      .catch(res => {
        const errors = res.graphQLErrors.map(error => error.message);
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

export default graphql(currentUser)(graphql(signupMutation)(SingupFrom));
