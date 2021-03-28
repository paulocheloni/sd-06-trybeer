import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Header } from '../components';
import { cartList, globalID, globalQuantity, removeCartItem } from '../actions';
import { finishOrders, getAllOrders, sendProductSale } from '../api/index';

class Checkout extends React.Component {
  constructor() {
    super();
    this.state = {
      validAdress: false,
      address: '',
      validNumber: false,
      number: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.storageToRedux = this.storageToRedux.bind(this);
    this.exclude = this.exclude.bind(this);
  }

  async componentDidMount() {
    await this.storageToRedux();
    const { history } = this.props;
    if (!localStorage.token) {
      history.push('./login');
    }
  }

  handleChange({ target: { name, value } }) {
    const minLength = 0;

    if (name === 'adress') {
      if (value.length > minLength) {
        this.setState({ validAdress: true, address: value });
      } else {
        this.setState({ validAdress: false });
      }
    }
    if (name === 'number') {
      if (value.length > minLength) {
        this.setState({ validNumber: true, number: value });
      } else {
        this.setState({ validNumber: false });
      }
    }
  }

  async handleClick() {
    const { history, stateCart } = this.props;
    const { address, number } = this.state;
    const priceTotal = Number(localStorage.getItem('price')).toFixed(2);
    const date = new Date().toLocaleString('pt-BR');

    const numbers = date.split(' ')[0].split('/');
    const newDate = `${numbers[2]}/${numbers[1]}/${numbers[0]}`;
    const fullDate = date.replace(`${date.split(' ')[0]}`, `${newDate}`);
    const userID = JSON.parse(localStorage.getItem('actualUser')).id;

    await finishOrders({ priceTotal, date: fullDate, userID, address, number });

    const TWOTHOUSAND = 2000;
    setTimeout(() => {}, TWOTHOUSAND);

    // if (history.location.pathname === '/checkout') {
    //   history.push('/products', { purchase: true });
    // }
    const orders = await getAllOrders();
    console.log(orders.length)
    stateCart.forEach((element) => {
      sendProductSale(orders.length, element.id, element.quantity);
    });
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
        dispatchCart(localStorageCart[index]);
        dispatchID(localStorageCart[index].id);
      }
    }
  }

  async exclude(id) {
    const { dispatchRemoved, stateCart, stateID } = this.props;
    // Atualização Valor total do Carrinho após Excluir item
    const itemToExclude = stateCart.filter((element) => element.id === id)[0];
    const priceItem = itemToExclude.price.split(' ')[1].replace(',', '.');
    const quantityItem = itemToExclude.quantity;
    let priceCart = localStorage.getItem('price');
    priceCart -= parseFloat(priceItem * quantityItem).toFixed(2);
    localStorage.setItem('price', parseFloat(priceCart).toFixed(2));
    // Atualização da quantidade do Carrinho após Excluir item
    const quantityStore = JSON.parse(localStorage.getItem('stateQuantity'));
    quantityStore[id] = 0;
    localStorage.setItem('stateQuantity', JSON.stringify(quantityStore));

    const newCart = stateCart.filter((element) => element.id !== id);
    await dispatchRemoved(newCart);
    localStorage.setItem('stateCart', JSON.stringify(newCart));
    const indexToBeRemoved = stateID.indexOf(id);
    stateID.splice(indexToBeRemoved, 1);
  }

  render() {
    // console.log(stateCart);
    const { history, stateCart } = this.props;
    const { validAdress, validNumber } = this.state;
    return (
      <div className="checkout-container">
        <Header history={ history } />
        <div className="checkout-div">
          <div className="products-div">
            <h2>Produtos</h2>
            { stateCart && stateCart.length ? stateCart.map((element, index) => (
              <div
                className="cart-item"
                key={ element.name }
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
              // onClick={ () => history.push('/products', { purchase: true }) }
              onClick={ this.handleClick }
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
  dispatchCart: (array) => dispatch(cartList(array)),
  dispatchQtd: (qtd, id) => dispatch(globalQuantity(qtd, id)),
  dispatchRemoved: (array) => dispatch(removeCartItem(array)),
});

Checkout.propTypes = {
  dispatchID: PropTypes.func.isRequired,
  dispatchCart: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
  dispatchQtd: PropTypes.func.isRequired,
  stateCart: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatchRemoved: PropTypes.func.isRequired,
  stateID: PropTypes.arrayOf(PropTypes.string).isRequired,
  stateQuantity: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
