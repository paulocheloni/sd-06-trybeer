import React from 'react';
import { connect } from 'react-redux';
import { validNameReg, validEmailReg, validPassReg } from '../actions';

class RegisterDiv extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
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
          <input className="input" name="name" onChange={ this.handleChange } />
          <span>Email</span>
          <input className="input" name="email" onChange={ this.handleChange } />
          <span>Senha</span>
          <input className="input" name="password" type="password" onChange={ this.handleChange } />
          <label htmlFor="sell-checkbox">
            <input type="checkbox" id="sell-checkbox" />
            <span>Quero Vender</span>
          </label>
        </div>
        <button type="button" disabled={ !validRegName || !validRegEmail || !validRegPass }>CADASTRAR</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterDiv);
