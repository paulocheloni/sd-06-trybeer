import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { loadState, saveState } from '../services/localStorage';
import NavBar from '../components/menuNavBar';
import api from '../services/api';
import context from '../Context/ContextAPI';
import ButtonAdd from '../components/buttonAdd';
import ButtonSub from '../components/buttonSub';
import MenuFooter from '../components/menuFooter';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 1000,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  // gridListTitle: {
  //   height: 200,
  //   // zIndex: -1
  // },
  gridListTitleBar: {
    height: 100,
  },
}));

const magicNumber = {
  menosUm: -1,
};

function Cliente() {
  const [products, setProducts] = useState([]);
  const { cart, setCart } = useContext(context);
  const history = useHistory();

  useEffect(() => {
    if (!loadState('user')) return history.push('/login');
    const { email } = loadState('user');

    const storageCart = loadState(`${email}`);
    if (storageCart) return setCart(storageCart);
    return saveState(`${email}`, []);
  }, [history, setCart]);

  useEffect(() => {
    if (!loadState('user')) return history.push('/login');
    const { email } = loadState('user');
    saveState(`${email}`, cart);
  }, [cart, history]);

  useEffect(() => {
    const logon = loadState('user');
    if (!logon) return history.push('/login');
    if (logon.role === 'administrator') return history.push('/admin/orders');
  }, [history]);

  useEffect(() => {
    api.listProducts()
      .then((productsList) => {
        setProducts(productsList.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const classes = useStyles();

  const prodQty = (tile) => {
    const idx = cart.findIndex((elem) => elem.name === tile.name);
    if (idx === magicNumber.menosUm) return '0';
    return `${cart[idx].quantity}`;
  };

  return (
    <div>
      <NavBar content="TryBeer" />
      <div className={ classes.root }>
        {/* <GridList cellHeight={ 180 }  */}
        {products.map((tile, index) => (
          <div key={ index }>
            <GridListTile
              className={ classes.gridListTitle }
            >

              {/* Image */}
              <img
                src={ tile.url_image.replace(/ /g, '_') }
                data-testid={ `${index}-product-img` }
                alt={ tile.name }
              />

              <GridListTileBar
                className={ classes.gridListTitleBar }
              />

              <p data-testid={ `${index}-product-name` }>{tile.name}</p>

              <span data-testid={ `${index}-product-price` }>
                R$
                {' '}
                {tile.price.replace('.', ',')}
              </span>

              {/* Botao de - */}
              <ButtonSub product={ tile } dataIndex={ index } />

              {/* Quantidade de Produtos */}
              <span data-testid={ `${index}-product-qtd` }>
                {prodQty(tile)}
              </span>

              {/* Botao de + */}
              <ButtonAdd product={ tile } dataIndex={ index } />

            </GridListTile>
          </div>
        ))}
        {/* </GridList> */}
      </div>
      <MenuFooter />
    </div>
  );
}

export default Cliente;
