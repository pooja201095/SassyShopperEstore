import React from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import MuiDialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import {connect} from 'react-redux';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  }
});

const useStyles = makeStyles(theme => ({
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  customGridStyle:{
      margin: 'auto'
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  }
}));

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const DialogContent = withStyles(theme => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);

function WishList({handleClose,open,favourite}) {
  const classes = useStyles();

  return (
    <div>
      <Dialog maxWidth="md" fullWidth={true} onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
         <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          WishList
        </DialogTitle>
        <DialogContent dividers>
            {favourite.length >0 ?
            <List className={classes.root}>
            {favourite.map((fav)=>{
                return(
                    <Grid key={fav.productName} container spacing={2}>
                        <Grid item>
                            <ButtonBase className={classes.image}>
                                 <img className={classes.img} alt="complex" src={fav.productImage} />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid className={classes.customGridStyle} item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        {fav.productName}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                     </Grid>
                );
            })}
        </List>
        :<div>Wishlist Empty</div>}
        
        </DialogContent>
    <DialogActions><Button autoFocus onClick={handleClose} color="primary">
            Vist page
          </Button>
    </DialogActions>
    </Dialog>
    </div>
  );
}

const mapStatesToProps=(state) =>{
    return {favourite:state.favourite}
  }
  
export default connect(mapStatesToProps)(WishList);