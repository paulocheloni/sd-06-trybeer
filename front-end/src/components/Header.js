import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ToogleMenu from './ToogleMenu';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { history } = this.props;
    return (
      <header className="globalheader-container">
        <div className="h1-div">
          <h1>TryBeer</h1>
        </div>
        <ToogleMenu history={ history } />
      </header>
    );
  }
}

Header.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(null, null)(Header);
