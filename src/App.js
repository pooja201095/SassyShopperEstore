import React from 'react';
import Header from './components/Header';
import StickyFooter from './components/Footer';
import ItemList from './components/ItemList';

import {connect} from 'react-redux';

 

import { fetchProducts } from './actions';


class App extends React.Component {
  componentDidMount(){
    this.props.fetchProducts();
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <br></br>
        <ItemList {...this.props} />
        <StickyFooter/>
      </div>
    );
  }
}

const mapStatesToProps=(state) =>{
  console.log(state);
  return {
    products:state.products,
    category:state.category
  }
}

export default connect(mapStatesToProps,{fetchProducts})(App);
