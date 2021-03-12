import PropTypes from 'prop-types';
import React from 'react';
import { RegisterDiv } from '../components';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { history } = this.props;
    return (
      <RegisterDiv history={ history } />
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Login;
