import React, { Component } from 'react';
import { EventEmitter } from 'events';

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  onSubmit(event) {
    const { email, password } = this.state;
    event.preventDefault();
    this.props.onSubmit({ email, password });
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={this.onSubmit.bind(this)} className="col s6">
          <div>
            <input
              placeholder="Email"
              value={this.state.email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </div>
          <div>
            <input
              placeholder="Pasword"
              type="password"
              value={this.state.password}
              onChange={e => this.setState({ password: e.target.value })}
            />
          </div>
          {this.props.errors.map(error => (
            <div key={error}>{error}</div>
          ))}
          <button className="btn">Submit</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
