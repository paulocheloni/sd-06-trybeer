import React from 'react';
import PropTypes from 'prop-types';
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
  }

  render() {
    const { history } = this.props;
    return (
      <div className="tooglemenu-container">
        <button type="button" className="toogle-button" onClick={ this.toogleInOut }>
          <i className="fas fa-bars" />
        </button>
        <div className="buttons-div">
          <button
            type="button"
            onClick={ () => history.push('./products') }
          >
            Produtos
          </button>
          <button
            type="button"
            onClick={ () => history.push('./orders') }
          >
            Meus Pedidos
          </button>
          <button
            type="button"
            onClick={ () => history.push('./profile') }
          >
            Meu Perfil
          </button>
        </div>
      </div>
    );
  }
}

ToogleMenu.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default connect(null, null)(ToogleMenu);
