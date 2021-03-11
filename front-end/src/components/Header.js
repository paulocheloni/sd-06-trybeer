import React from 'react';
import { connect } from 'react-redux';
import { ToogleMenu } from '.';

class ComponentName extends React.Component {
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

export default connect(null, null)(ComponentName);
