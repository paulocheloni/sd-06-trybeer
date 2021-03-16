import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import Hamburguer from './Hamburguer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    // <div className="side-menu-container">
    <div className={ `side-menu-container ${classes.root}` }>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={ classes.menuButton }
            color="inherit"
            aria-label="menu"
          >
            <Hamburguer />
          </IconButton>
          <Typography data-testid="top-title" variant="h4" className={ classes.title }>
            TryBeer
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    // </div>
  );
}
