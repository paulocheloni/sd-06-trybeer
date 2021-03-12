import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { history } = this.props;
    history.push('./login');
  }

  render() {
    return (
      <div>
        <p>Your Code Here</p>
      </div>
    );
  }
}

Home.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(null, null)(Home);
