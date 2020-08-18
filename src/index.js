import React from 'react';
import ReactDOM from 'react-dom';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import routing from './components/Router'

ReactDOM.render(
    <Provider store={createStore(reducers,applyMiddleware(thunk))}>
       {routing}
    </Provider>,
    document.getElementById('root')
);
