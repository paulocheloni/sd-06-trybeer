import React from 'react';
import { connect } from 'react-redux';
import { profileName } from '../actions';
import { Header } from '../components';
import defaultProfile from '../img/profile.png';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target: { name, value } }) {
    const { dispatchName } = this.props;
    const maxLength = 6;
    if (name === 'name') {
      if (value.length >= maxLength) {
        dispatchName(value);
      } else {
        dispatchName('');
      }
    }
  }

  render() {
    const { history, profileName } = this.props;
    const maxLength = 6;
    return (
      <div className="profile-container">
        <Header history={ history } />
        <div className="inputs-div">
          <img src={ defaultProfile } alt="profile" />
          <input name="name" placeholder="Name" onChange={ this.handleChange } />
          <input placeholder="Email - ReadOnly" readOnly />
          <button type="button" disabled={ profileName.length >= maxLength ? null : true }>Salvar</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profileName: state.login.profileName,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchName: (name) => dispatch(profileName(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
