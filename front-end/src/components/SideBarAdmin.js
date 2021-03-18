import React from 'react';

class SideBarAdmin extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const goLogin = () => (window.location.href = '/login')
    const goOrders = () => (window.location.href = '/admin/orders')
    const goProfile = () => (window.location.href = '/admin/profile')

    // não consegui usar o history.push pois acrescenta rota na que eu já estou e precisava substituir, não consegui com o history.replace()
    // const { history } = this.props;
    return (
      <header className="sidebar-container">
        <h1>TryBeer</h1>
        <nav className="admin-side-bar-container">
          <div className="buttons">
            <button
              type="button"
              data-testid="side-menu-item-orders"
              onClick={ goOrders }
            >
              Pedidos
            </button>
            <button
              type="button"
              data-testid="side-menu-item-profile"
              onClick={ goProfile }
            >
              Perfil
            </button>
          </div>
          <div className="button-logout">
            <button
              type="button"
              data-testid="side-menu-item-logout"
              onClick={ goLogin }
            >
              Sair
            </button>
          </div>
        </nav>
      </header>
    );
  }
}

export default SideBarAdmin;
