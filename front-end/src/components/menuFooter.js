import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
import Hamburguer from './Hamburguer';
import context from '../Context/ContextAPI';

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
}));

export default function MenuFooter() {
  const classes = useStyles();
  const { price } = useContext(context);

  return (
    <>
      <CssBaseline />
      <Paper square className={ classes.paper } />
      <AppBar position="fixed" color="primary" className={ classes.appBar }>
        <Toolbar>

          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <Hamburguer />
          </IconButton>

          <Fab color="secondary" aria-label="add" className={ classes.fabButton }>

            <SearchIcon />

          </Fab>
            
          <div className={ classes.grow } />
            <IconButton edge="start" color="inherit" aria-label="open drawer">
            {price}
          </IconButton>


        </Toolbar>
      </AppBar>
    </>
  );
}
