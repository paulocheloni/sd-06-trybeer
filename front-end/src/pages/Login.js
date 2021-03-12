import React from 'react';
import PropTypes from 'prop-types';
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

Login.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Login;
