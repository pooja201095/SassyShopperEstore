import React from 'react';
import { fade,makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Badge from '@material-ui/core/Badge';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import AuthLogin from './AuthLogin';
import WishList from './WishList';
import src from '/Users/poochava1/Documents/Projects/Estore/sassyshopper/src/logo/00407845-eee2-4a99-abfa-db8c292da597_200x200.png';

import {connect} from 'react-redux';
import {setCurrentCategory} from '../actions';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    right:'0',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'right',
    justifyContent: 'right',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    }
}
}));

 function Header(props) {
  const classes = useStyles();
  const productCategories = ["All","Women", "Men", "Kids", "Home","Electronics","Toys", "Accessories", "Books", "Beauty","Grocery"];
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = event => {
    props.setCurrentCategory(event.target.value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img alt="logo" src={src} style={{ borderRadius: "50%",height:"80px",width:"80px",backgroundColor:"white"}}></img>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          <FormControl className={classes.formControl}>
            Categories
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={productCategories[0]}
          onChange={handleChange}
        >
          {productCategories.map((category)=>{
            return <MenuItem key={category} value={category}>{category}</MenuItem>
          })
        }
        </Select>
      </FormControl>
          </Typography>
          <div className={classes.search} style={{fontSize:"large"}}>
            <div className={classes.searchIcon}>
              <SearchIcon fontSize="large" />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          
          <Badge badgeContent={props.favouriteItems.length} color="secondary">
          <Button color="inherit" onClick={handleClickOpen}><FavoriteIcon fontSize="large"/></Button>
          </Badge>
          <WishList handleClose={handleClose} open={open}></WishList>
          <Badge badgeContent={props.cartItems.length} color="secondary">
          <Button color="inherit"><Link to="/cart"><ShoppingCartIcon fontSize="large"/></Link></Button>
          </Badge>
          <Button color="inherit"><AuthLogin/></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
    favouriteItems:state.favourite
  }
}

export default connect(mapStateToProps,{setCurrentCategory})(Header);