import React from 'react';
import { connect } from 'react-redux';
import { Header } from '../components';

class Orders extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { history } = this.props;
    return (
      <div>
          <Header history={ history } />
        <p>Orders</p>
      </div>
    );
  }
}

export default connect(null, null)(Orders);
