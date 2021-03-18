import React from 'react';
import PropTypes from 'prop-types';
// import { Header } from '../components';
import defaultProfile from '../img/profile.png';
import SideBarAdmin from '../components/SideBarAdmin';
import { connect } from 'react-redux';

class AdminProfile extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { history, stateActualUser } = this.props;
    console.log(stateActualUser);
    return (
      <div className="profile-container">
        {/* <Header history={ history } /> */}
        <SideBarAdmin history={ history } />
        <div className="inputs-div">
          <img src={ defaultProfile } alt="profile" />
          <h2 data-testid="profile-name">{ `Nome: ${stateActualUser.name}` }</h2>
          <h2 data-testid="profile-email">{ `Email: ${stateActualUser.email}` }</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stateActualUser: state.user.actualUser,
});

AdminProfile.propTypes = {
  history: PropTypes.shape().isRequired,
  stateActualUser: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(AdminProfile);
