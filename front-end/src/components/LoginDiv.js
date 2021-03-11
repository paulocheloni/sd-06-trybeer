import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { validEmail, validPassword } from '../actions';

class LoginDiv extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    const { dispatchEmail, dispatchPassword } = this.props;
    const validator = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i;
    const maxLength = 5;
    if (name === 'email') {
      const isValid = validator.test(value.toLowerCase());
      if (isValid) {
        dispatchEmail(true);
      } else {
        dispatchEmail(false);
      }
    }
    if (name === 'password') {
      if (value.length > maxLength) {
        dispatchPassword(true);
      } else {
        dispatchPassword(false);
      }
    }
  }

  render() {
    const { validRegEmail, validRegPassword, history } = this.props;
    return (
      <div className="login-container">
        <div className="input-div">
          <span>Email</span>
          <input
            name="email"
            onChange={ this.handleChange }
            placeholder="Digite seu Email"
          />
          <span>Senha</span>
          <input
            name="password"
            type="password"
            placeholder="Digite sua Senha"
            onChange={ this.handleChange }
          />
        </div>
        <div className="button-div">
          <button
            type="button"
            className="btn-login"
            disabled={ !validRegEmail || !validRegPassword }
          >
            ENTRAR
          </button>
          <button
            type="button"
            className="btn-create"
            onClick={ () => history.push('/register') }
          >
            Ainda não tenho conta
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  validRegEmail: state.login.email,
  validRegPassword: state.login.password,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchEmail: (boolean) => dispatch(validEmail(boolean)),
  dispatchPassword: (boolean) => dispatch(validPassword(boolean)),
});

LoginDiv.propTypes = {
  history: PropTypes.shape().isRequired,
  validRegEmail: PropTypes.bool.isRequired,
  validRegPassword: PropTypes.bool.isRequired,
  dispatchEmail: PropTypes.func.isRequired,
  dispatchPassword: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginDiv);
