import React from 'react';
import {connect} from 'react-redux';
import ItemList from './ItemList';

function Cart(props) {
    return <div>
        {props.products.length>0 ?<ItemList {...props}></ItemList> : <div>Cart Empty! Please continue Shopping!</div>}
    </div>
}

const mapStatesToProps=(state) =>{
    return {
        products:state.cart,
        category:state.category
    }
  }
  
export default connect(mapStatesToProps)(Cart);