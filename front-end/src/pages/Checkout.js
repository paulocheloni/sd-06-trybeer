import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from '../components';
import { addCart, globalID, globalQuantity, removeCartItem } from '../actions';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      validAdress: false,
      validNumber: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.exclude = this.exclude.bind(this);
  }

  componentDidMount() {
    this.storageToRedux();
  }

  handleChange({ target: { name, value } }) {
    const minLength = 0;
    if (name === 'adress') {
      if (value.length > minLength) {
        this.setState({ validAdress: true });
      } else {
        this.setState({ validAdress: false });
      }
    }
    if (name === 'number') {
      if (value.length > minLength) {
        this.setState({ validNumber: true });
      } else {
        this.setState({ validNumber: false });
      }
    }
  }

  async storageToRedux() {
    const { stateQuantity, dispatchQtd, dispatchCart, dispatchID } = this.props;
    if (!localStorage.getItem('stateQuantity')) {
      await localStorage.setItem('stateQuantity', JSON.stringify(stateQuantity));
    }
    if (localStorage.getItem('stateQuantity')) {
      const localStorageQtd = JSON.parse(localStorage.getItem('stateQuantity'));
      const qtdLength = 12;
      for (let index = 1; index < qtdLength; index += 1) {
        dispatchQtd(localStorageQtd[index], index);
      }
    }
    if (localStorage.getItem('stateCart')) {
      const localStorageCart = JSON.parse(localStorage.getItem('stateCart'));
      for (let index = 0; index < localStorageCart.length; index += 1) {
        const { stateCart } = this.props;
        const contains = stateCart.filter((element) => element.name === localStorageCart[index].name);
        if (contains.length < 1) {
          dispatchCart(localStorageCart[index]);
          dispatchID(localStorageCart[index].id);
        }
      }
    }
  }

  async exclude(id) {
    const { dispatchRemoved, stateCart, stateID } = this.props;
    const newCart = stateCart.filter((element) => element.id !== id);
    await dispatchRemoved(newCart);
    localStorage.setItem('stateCart', JSON.stringify(newCart));
    const indexToBeRemoved = stateID.indexOf(id);
    stateID.splice(indexToBeRemoved, 1);
  }

  render() {
    const { history, stateCart } = this.props;
    const { validAdress, validNumber } = this.state;
    console.log(stateCart)
    return (
      <div className="checkout-container">
        <Header history={ history } />
        <div className="checkout-div">
          <div className="products-div">
            <h2>Produtos</h2>
            { stateCart ? stateCart.map((element, index) => (
              <div
                className="cart-item"
                key={ index }
                data-testid={ `${index}-product-price` }
              >
                <img src={ element.imgUrl } alt={ `product-${index}` } />
                <h4 data-testid={ `${index}-product-qtd-input` }>{ element.quantity }</h4>
                <h4 data-testid={ `${index}-product-name` }>{ element.name }</h4>
                <h4 data-testid={ `${index}-product-total-value` }>
                  {`R$ ${(element.price.split(' ')[1]
                    .replace(',', '.') * element.quantity)
                    .toFixed(2).replace('.', ',')}`}
                </h4>
                <h5 data-testid={ `${index}-product-unit-price` }>
                  {`(${element.price} un)`}
                </h5>
                <button
                  type="button"
                  data-testid={ `${index}-removal-button` }
                  onClick={ () => this.exclude(element.id) }
                >
                  <i className="fas fa-times" />
                </button>
              </div>
            )) : <h4>Não há produtos no carrinho</h4>}
          </div>
          <div className="total-div">
            <h4 data-testid="order-total-value">
              { localStorage.price
                ? `Total: R$
                ${parseFloat(localStorage.price).toFixed(2).replace('.', ',')}`
                : null }
            </h4>
          </div>
          <div className="adress-div">
            <h3>Endereço</h3>
            <input
              type="text"
              placeholder="Rua"
              name="adress"
              onChange={ this.handleChange }
              data-testid="checkout-street-input"
            />
            <input
              name="number"
              type="number"
              placeholder="Número"
              data-testid="checkout-house-number-input"
              onChange={ this.handleChange }
            />
            <button
              type="button"
              data-testid="checkout-finish-btn"
              disabled={ !validAdress || !validNumber }
            >
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stateCart: state.products.cartList,
  stateID: state.products.globalID,
  stateQuantity: state.products.quantity,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchID: (id) => dispatch(globalID(id)),
  dispatchCart: (array) => dispatch(addCart(array)),
  dispatchQtd: (qtd, id) => dispatch(globalQuantity(qtd, id)),
  dispatchRemoved: (array) => dispatch(removeCartItem(array)),
});

Home.propTypes = {
  dispatchID: PropTypes.func.isRequired,
  dispatchCart: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
  dispatchQtd: PropTypes.func.isRequired,
  stateCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchRemoved: PropTypes.func.isRequired,
  stateID: PropTypes.arrayOf(PropTypes.string).isRequired,
  stateQuantity: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
