import React from 'react';
import PropTypes from 'prop-types';
// import { Header } from '../components';
import defaultProfile from '../img/profile.png';
import SideBarAdmin from '../components/SideBarAdmin';

class AdminProfile extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { history } = this.props;
    return (
      <div className="profile-container">
        {/* <Header history={ history } /> */}
        <SideBarAdmin history={ history } />
        <div className="inputs-div">
          <img src={ defaultProfile } alt="profile" />
          <h2 data-testid="profile-name">Name</h2>
          <h2 data-testid="profile-email">Email</h2>
        </div>
      </div>
    );
  }
}

AdminProfile.propTypes = {
  history: PropTypes.shape().isRequired,
};


export default (AdminProfile);
