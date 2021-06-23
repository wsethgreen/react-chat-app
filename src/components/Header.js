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
      <Link to="/" onClick={preventDefault}>
        Home
      </Link>
      <Link href="/chat" onClick={preventDefault}>
        Chat
      </Link>
      <Link href="/login" onClick={preventDefault}>
        Login
      </Link>
      <Link href="/logout" onClick={preventDefault}>
        Logout
      </Link>
    </Typography>
  );
}