import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


class Routes extends Component {

  render () {

    return (
      <BrowserRouter history={ history }>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/path" component={Path} />
            {/* These components above don't exist yet.
                Right now they are just placeholders for
                you to see the pattern. Make your own
                components in /components and then
                import and link them here */}
          </Switch>
      </BrowserRouter>
    )
  }
}

export default Routes
