import React from 'react';
import { connect } from 'react-redux';

class ToogleMenu extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  toogleInOut() {
    const toogleMenuContainer = document.querySelector('.tooglemenu-container');
    const buttonsDiv = document.querySelector('.buttons-div');
    if (buttonsDiv.style.display === '') {
      buttonsDiv.style.display = 'flex';
    } else {
      buttonsDiv.style.display = '';
    }
    if (toogleMenuContainer.style.height === '') {
      toogleMenuContainer.style.height = '100%';
    } else {
      toogleMenuContainer.style.height = '';
    }
    // document.querySelector('.tooglemenu-container ').style.height = '100%';
    // document.querySelector('.buttons-div').style.display = 'flex';
  }

  render() {
    const { history } = this.props;
    return (
      <div className="tooglemenu-container">
        <button type="button" className="toogle-button" onClick={ this.toogleInOut }>
          <i className="fas fa-bars" />
        </button>
        <div className="buttons-div">
          <button type="button" onClick={ () => history.push('./products') }>Produtos</button>
          <button type="button" onClick={ () => history.push('./orders') }>Meus Pedidos</button>
          <button type="button" onClick={ () => history.push('./profile') }>Meu Perfil</button>
        </div>
      </div>
    );
  }
}

export default connect(null, null)(ToogleMenu);
