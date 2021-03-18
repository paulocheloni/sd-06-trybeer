import React from 'react';
import PropTypes from 'prop-types';

class SideBarAdmin extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { history } = this.props;
    const cinco = -5;
    console.log(history);
    return (
      <header className="sidebar-container">
        <h1>TryBeer</h1>
        <nav className="admin-side-bar-container">
          <div className="buttons">
            <button
              type="button"
              data-testid="side-menu-item-orders"
              onClick={ () => history.replace('./orders') }
            >
              Pedidos
            </button>
            <button
              type="button"
              data-testid="side-menu-item-profile"
              onClick={ () => history.replace('./profile') }
            >
              Perfil
            </button>
          </div>
          <div className="button-logout">
            <button
              type="button"
              data-testid="side-menu-item-logout"
              onClick={ () => history.go(cinco) }
            >
              Sair
            </button>
          </div>
        </nav>
      </header>
    );
  }
}

SideBarAdmin.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default (SideBarAdmin);
