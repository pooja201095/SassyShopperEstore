import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Item from './Item';
import Container from '@material-ui/core/Container';
import {connect} from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function renderList(products,category) {
  let filtered=products;

  if(category !== "All") {
    filtered =  products.filter((product)=> product.productCategory === category);
  }

    return filtered.map((product) => {
        return (<Grid key={product.id} item xs={3}>
            <Item product={product} imgUrl={product.productImage}></Item>
        </Grid>)
    });
}

function CenteredGrid({products,category}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Container>
      <Grid container spacing={3}>
        {renderList(products,category)}
      </Grid>
    </Container>
    </div>
  );
}
  
export default CenteredGrid;
  
