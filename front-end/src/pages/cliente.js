import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import NavBar from '../components/menuNavBar';
import api from '../services/api';
import context from '../Context/ContextAPI';
import ButtonAdd from '../components/buttonAdd';
import ButtonSub from '../components/buttonSub';
import { loadState, saveState } from '../services/localStorage';

import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

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
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

function Cliente() {
  const [products, setProducts] = useState([]);
  const { cart, setCart, totalPrice, setTotalPrice } = useContext(context);
  const history = useHistory();

  useEffect(() => {
    const { email } = loadState('user');

    const storageCart = loadState(`${email}`);
    storageCart ? setCart(storageCart) : saveState(`${email}`, []);
  }, []);

  useEffect(() => {
    const { email } = loadState('user');
    saveState(`${email}`, cart);
  }, [cart]);

  useEffect(() => {
    const logon = loadState('user');
    if (!logon) return history.push('/login');
    if (logon.role === 'administrator') return history.push('/admin/orders');
  }, [history]);

  useEffect(() => {
    api.listProducts()
    .then((products) => {
      setProducts(products.data);
    })
    .catch((err) => console.log(err));
  }, []);

  const classes = useStyles();

  const prodQty = (tile) => {
    const idx = cart.findIndex((elem) => elem.name === tile.name);
    if (idx === -1) return '0';
    return `${cart[idx].quantity}`;
  };

  return (
    <div>
      <NavBar content="TryBeer" />
      <h1>Cliente</h1>

      <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Cliente - Produtos</ListSubheader>
        </GridListTile>
        {products.map((tile, index) => {
          const link_img = tile.url_image.replace(/ /g, "_")
          return (
          <GridListTile key={link_img} key={index}>
            <img src={link_img} alt={tile.name} />
            <GridListTileBar
              data-testid={`${index}-product-name`}
              title={tile.name}
              subtitle={<span data-testid={`${index}-product-price`}>price: {tile.price}</span>}
              actionIcon={
                <>
                  <ButtonAdd product={ tile } />
                  <span>
                    {prodQty(tile)}
                  </span>
                  <ButtonSub product={ tile } />
                </>
              }
            />
          </GridListTile>
        )})}
      </GridList>
    </div>
    </div>
  );
}

export default Cliente;
