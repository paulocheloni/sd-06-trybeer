import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { validNameReg, validEmailReg, validPassReg } from '../actions';
import { create, validateEmailRegistered } from '../api/index';

class RegisterDiv extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  async signUp({ target }) {
    const { history } = this.props;
    const name = target.parentNode.firstChild.childNodes[1].value;
    const email = target.parentNode.firstChild.childNodes[3].value;
    const pass = target.parentNode.firstChild.childNodes[5].value;
    const checked = target.parentNode.firstChild.childNodes[6].firstChild;
    //
    const isEmailRegistered = await validateEmailRegistered(email);
    if (isEmailRegistered) {
      this.setState({
        hasError: isEmailRegistered
      })
    } else {
      const role = checked.checked ? 'administrator' : 'client';
      create(name, email, pass, role);
      history.push(checked.checked ? '/admin/orders' : '/products');
    }
  }

  handleChange({ target: { name, value } }) {
    const { dispatchRegName, dispatchRegEmail, dispatchRegPass } = this.props;
    if (name === 'email') {
      const validator = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3}$/i;
      const isValid = validator.test(value.toLowerCase());
      if (isValid) {
        dispatchRegEmail(true);
      } else {
        dispatchRegEmail(false);
      }
    }
    if (name === 'password') {
      const maxLength = 5;
      if (value.length > maxLength) {
        dispatchRegPass(true);
      } else {
        dispatchRegPass(false);
      }
    }

    if (name === 'name') {
      const validator = /^[a-z ]+$/i;
      const isValid = validator.test(value.toLowerCase());
      const maxLength = 12;
      if (isValid && value.length > maxLength) {
        dispatchRegName(true);
      } else {
        dispatchRegName(false);
      }
    }
  }

  render() {
    const { validRegName, validRegEmail, validRegPass } = this.props;
    return (
      <div className="register-container">
        <div className="register-form">
          <span>Nome</span>
          <input
            name="name"
            className="input"
            data-testid="signup-name"
            onChange={ this.handleChange }
          />
          <span>Email</span>
          <input
            name="email"
            className="input"
            data-testid="signup-email"
            onChange={ this.handleChange }
          />
          <span>Senha</span>
          <input
            name="password"
            type="password"
            className="input"
            data-testid="signup-password"
            onChange={ this.handleChange }
          />
          <label htmlFor="sell-checkbox">
            <input type="checkbox" id="sell-checkbox" data-testid="signup-seller" />
            <span>Quero vender</span>
          </label>
        </div>
        <button
          type="button"
          data-testid="signup-btn"
          onClick={ (event) => this.signUp(event) }
          disabled={ !validRegName || !validRegEmail || !validRegPass }
        >
          Cadastrar
        </button>
        { this.state.hasError }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  validRegName: state.login.regName,
  validRegEmail: state.login.regEmail,
  validRegPass: state.login.regPass,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchRegName: (boolean) => dispatch(validNameReg(boolean)),
  dispatchRegEmail: (boolean) => dispatch(validEmailReg(boolean)),
  dispatchRegPass: (boolean) => dispatch(validPassReg(boolean)),
});

RegisterDiv.propTypes = {
  history: PropTypes.shape().isRequired,
  validRegEmail: PropTypes.bool.isRequired,
  validRegName: PropTypes.bool.isRequired,
  validRegPass: PropTypes.bool.isRequired,
  dispatchRegName: PropTypes.func.isRequired,
  dispatchRegPass: PropTypes.func.isRequired,
  dispatchRegEmail: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterDiv);