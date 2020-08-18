import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: 'auto',
    width:'100%'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: "30px",
    backgroundColor: 'white',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  rightaligned: {
      marginRight:"0"
  }
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container className={classes.rightaligned} maxWidth="sm">
          <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>About Us</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Contact Us</Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Follow Us</Paper>
        </Grid>
      </Grid>
        </Container>
      </footer>
    </div>
  );
}