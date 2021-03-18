import React from 'react';
// import { Header } from '../components';
import defaultProfile from '../img/profile.png';
import SideBarAdmin from '../components/SideBarAdmin';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // const { history } = this.props;
    return (
      <div className="profile-container">
        {/* <Header history={ history } /> */}
        <SideBarAdmin />
        <div className="inputs-div">
          <img src={ defaultProfile } alt="profile" />
          <h2 data-testid='profile-name'>{`Nome: `}</h2>
          <h2 data-testid='profile-email'>{`Email: `}</h2>
        </div>
      </div>
    );
  }
}

export default (Profile);
