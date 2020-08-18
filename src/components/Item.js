import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ItemDetail from './ItemDetail';

import {addToCart,addToFavourite} from '../actions';
import {connect} from 'react-redux';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  rightAlign: {
      marginLeft:"auto"
  }
});

 function Item(props) {
  const {product,imgUrl}=props;
  const classes = useStyles();
  let [quantity,setquantity] = useState(0);
  let [removed, setRemoved] = useState(false);
  let [isFavourite, setisFavourite] = useState(false);
  const [open, setOpen] = React.useState(false);

  useEffect(()=>{
    if(product.quantity!== undefined && product.quantity!==0) {
      setquantity(product.quantity);
    }

    if(product.isFavourite!== undefined) {
      setisFavourite(product.isFavourite);
    }
  },[])

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleAddToCart= (quantity)=>{
    product.quantity=quantity;
    props.addToCart(product);
  }


  const callFavouriteReducer =() => {
    product.isFavourite = isFavourite
    props.addToFavourite(product);
  }

  useEffect(() => {
    callFavouriteReducer();
  },[isFavourite===true])

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={handleClickOpen}>
        <CardMedia
          className={classes.media}
          image={imgUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.productName}
          </Typography>
          <Typography gutterBottom variant="h5" component="h4">
            Price: {product.productPrice} /-
          </Typography>
        </CardContent>
      </CardActionArea>
      <ItemDetail handleClose={handleClose} open={open} product={product}></ItemDetail>
      <hr></hr>
      <CardActions disableSpacing>
        { quantity ? (<ButtonGroup onClick={handleAddToCart(quantity)} size="medium" aria-label="small outlined button group">
              <Button onClick={()=>{setquantity(quantity-1);setRemoved(true)}}>-</Button>
              <Button onClick={()=>setquantity(quantity)}>{quantity}</Button>
              <Button onClick={()=>setquantity(quantity+1)}>+</Button>
            </ButtonGroup> ) : <Button variant="outlined" onClick={()=>setquantity(quantity+1)}>Add To Cart</Button>
        }
        {quantity===0 && removed && handleAddToCart(quantity)}
        
        
        <IconButton className={classes.rightAlign} aria-label="add to favorites" onClick={async ()=>await setisFavourite(isFavourite === false ? true : false)}>
          {isFavourite ? <FavoriteIcon onClick={()=>callFavouriteReducer()} style={{color:"red"}}/> :<FavoriteIcon onClick={()=>callFavouriteReducer()}/>}
        </IconButton>
      </CardActions>
    </Card>
  );
}


export default connect(null,{addToCart,addToFavourite})(Item);