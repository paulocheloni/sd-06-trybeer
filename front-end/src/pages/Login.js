import React from 'react';
import { LoginDiv } from '../components';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { history } = this.props;
    return (
      <LoginDiv history={ history } />
    );
  }
}

export default Login;
