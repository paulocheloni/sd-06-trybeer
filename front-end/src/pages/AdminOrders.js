// import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
// import { Header } from '../components';
import SideBarAdmin from '../components/SideBarAdmin';

class AdminOrders extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    // const { history } = this.props;
    return (
      <div>
        {/* <Header history={ history } /> */}
        <SideBarAdmin />
        <p>Orders</p>
      </div>
    );
  }
}

// AdminOrders.propTypes = {
//   history: PropTypes.shape().isRequired,
// };

export default connect(null, null)(AdminOrders);
