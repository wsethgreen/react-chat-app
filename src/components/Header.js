/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Home from '../pages/Home'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Links() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <Typography className={classes.root}>
      <div className="navbar_container">
        <a className="nav_link" href="/">Home</a>
        <a className="nav_link" href="/chat">Chat</a>
        <a className="nav_link" href="/login">Login</a>
        <a className="nav_link" href="/logout">Logout</a>
      </div>

    </Typography>
  );
}