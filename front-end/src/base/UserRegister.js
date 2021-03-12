import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

class UserRegister extends Component {
  constructor(props) {
    super(props);

    this.handleChanges = this.handleChanges.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.validateInputs = this.validateInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      password: '',
      seller: false,
      role: 'client',
      enableButton: false,
    };
  }

  handleChanges({ target: { name, value } }) {
    this.setState({
      [name]: value,
    }, () => {
      this.validateInputs();
    });
  }

  handleCheck({ target: { name, checked } }) {
    this.setState({
      [name]: checked,
    }, () => {
      this.validateInputs();
    })
  }

  handleSubmit() {
    const { name, email, seller } = this.state;
    const { history } = this.props;

    //setando o localStorage para teste. Será setado mais tarde pela resposta do backend
    localStorage.setItem('user', JSON.stringify({ name, email }));
    history.push(seller ? '/admin/orders' : '/products');
  }

  validateInputs() {
    const { email, password, name, seller } = this.state;
    const PASS_VALIDATION = 6;
    const NAME_VALIDATION = 12;

    const EMAIL_REGEX = RegExp(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)
      .test(email);
    
    const NAME_REGEX = RegExp(/^[a-záàâãéèêíïóôõöúçñ ]+$/i)
      .test(name);

    this.setState({
      enableButton: (EMAIL_REGEX &&
        NAME_REGEX &&
        password.length >= PASS_VALIDATION &&
        name.length >= NAME_VALIDATION),
    });
    
    seller ? this.setState({ role: 'admin'}) : this.setState({ role: 'client' });
  }

  render() {
    const { enableButton } = this.state;

    return (
      <section className="container">
        <h1>Register User</h1>
        <LoginForm
          handleChanges={ this.handleChanges }
          handleCheck={ this.handleCheck }
        />
        <button
          data-testid="signup-btn"
          type="submit"
          onClick={ this.handleSubmit }
          disabled={ !enableButton }
        >
          Cadastrar
        </button>
      </section>
    );
  }
}

UserRegister.propTypes = {
  history: PropTypes.objectOf(Object).isRequired,
};

export default UserRegister;
