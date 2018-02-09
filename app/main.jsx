import { Provider } from 'react-redux';
import React from 'react'
import store from './store.jsx';
import ReactDOM from 'react-dom'
import '../public/index.scss'
import Routes from './routes';

/*
  This is where you have the 'hello world' moment with getting react linked up.
  In your index.html you have an empty <div> with the id of 'app'. Here the
  ReactDOM.render takes two arguments:

  1) Your application to render
  2) Where to insert it into the DOM. In our case, that empty div with id of 'app'.

  You probably notice that our application is wrapped in a <Provider>
  This basically ensures that the store state will be available to all
  child components.

  If you are not familiar with that syntax (<Component prop={someValue} />)
  it's essentially a way to pass values along to other components.
  In the function that renders that component, that content will be available
  in it's props.

  <Routes /> is commented out for now. Assuming you want to use react-router,
  you would just uncomment that and then start placing your components in
  the routes file.
*/

ReactDOM.render(
  <Provider store={store}>
    <h1>Hello World!</h1>
    {/* <Routes /> */}
    {/*uncomment above to start writing routes*/}
  </Provider>,
  document.getElementById('app')
);
