import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


class Routes extends Component {

  render () {

    return (
      <BrowserRouter history={ history }>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/path" component={Path} />
          </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes
