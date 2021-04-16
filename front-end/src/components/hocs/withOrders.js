import React, { Component } from 'react';

function withOrders(WrappedComponent, func) {
  class HOC extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        loading: true,
      };
    }

    componentDidMount() {
      this.handleDataFromApi();
    }

    async handleDataFromApi() {
      const data = await func();
      this.setState({ data, loading: false });
      JSON.stringify(sessionStorage.setItem('orders', data));
    }

    render() {
      return (
        <WrappedComponent { ...this.state } { ...this.props } />
      );
    }
  }
  return HOC;
}

export default withOrders;
