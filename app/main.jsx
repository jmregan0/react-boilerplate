import { Provider } from 'react-redux';
import React from 'react'
import store from './store.jsx';
import ReactDOM from 'react-dom'
import '../public/index.scss'
import Routes from './routes';

ReactDOM.render(
  <Provider store={store}>
    <h1>made it into main.jsx</h1>
    {/* <Routes /> */}
    {/*uncomment above to start writing routes*/}
  </Provider>,
  document.getElementById('app')
);
