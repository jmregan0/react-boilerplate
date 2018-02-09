/*
This file will include a couple examples of React components.

Essentially you have two types:
  1) smart components (aware of state)
  2) dumb components (unaware of state)

  What that essentially means is that some components don't
  require knowledge of state to perform how they need to, so
  there is no point in connecting them to our store. Of course,
  you will want other components to have knowledge of the store
  and have the ability to update the store as needed, but react
  is made to be very modular, and some of those pieces you end
  up building will be very simple components of your page that
  don't require as much connectivity (a footer, for example).
*/

// dumb or stateless components are written as functions that simply
// return some HTML.

// import React from 'react' <--will always need this line

const SimpleComponent = () => {
  return (
    <h1>I don't need to know much to do my job!</h1>
  )
}


export default SimpleComponent


// Not too bad huh? That's about as simple as you can make a react component.

/*
  A more connected component will need to be written with class
  syntax. A couple reasons for that:
    1) It will need to extend React.Component to work right
    2) It may likely to need to keep some kind of local state so
      it will have a constructor, some instance methods, and a render
      function that will return the HTML.

  Here's how one could look:
*/

import React from 'react'

class ConnectedComponent extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      inputData: ''
    }
  }

  // could place some special instance methods here

  render(){
    return (
      <div>
        <input
          placeholder="your name here"
          onChange={ (event) => { this.setState({inputData: event.target.value})} } />
     </div>
    )
  }

}

export default ConnectedComponent


/*
  Even though this above component was managing it's own local state based
  on user action, it wasn't really connected to the redux store in any way.
  Let's look at a component that's actually hooked up to our store.
*/

/********************** Redux  ******************************************/

/*
  In main.jsx you may have seen how that <Provider> component passed the store
  down to all the children components like this:

  <Provider store={store}
    <Children />
  </Provider>

  That is the pure react way of passing along information to visual components
  who need that information to render their content. However, doing this
  again and again can get tedious. Also there are these methods
  called subscribe() and unsubscribe() that you have to call whenever you want
  your react components to listen to store updates or stop listening.

  Redux provides a really handy method called connect() which basically provides
  your components with two things:
    1) Access to state
    2) Access to store.dispatch() method

  The access to state is defined in the function mapStateToProps.
  The dispatch methods are defined in the function mapDispatchToProps.

  These functions, respectively, are the two arguments passed to connect().

  The last thing connect does is wrap the component we have written.

  So instead of writing this:
  export default myComponent

  you would write this:
  export default connect(mapStateToProps, mapDispatchToProps)(myComponent)

  If you look at store.jsx and what is exported there, you will see it's the result
  of createStore (a method from redux) with our root reducer and some other middleware
  thrown in. It's then exported at the bottom. That store has a .state, which is just
  an object representing the current application state, and a .dispatch, which is a method
  that has the capability of changing the state.

  We are carefully giving mapStateToProps access to store.state, and mapDispatchToProps access
  to store.dispatch, and those functions expose limited pieces of state, as well as limited dispatch
  methods to our component (only the ones it cares about).

  Let's say we have a component that has a simple input field. We want a user to be able to type
  their name in and once they submit it, have our application render a <div> with
  'hello' + userName. We also want to update the store about who our current user is.

  We want the following things in our component:
    1) A way to check with the store who the current user is
    2) A way to tell the store who the new current user is based on some user action.

    Here's a way we might go about it:
*/

import React, { Component } from 'react';
import { connect } from 'react-redux'


class NewUserForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: ''
    }
  }

  render() {
    <div>
      {
       this.props.currentUser ?
       <h1>Hello {this.props.currentUser}</h1>
       :
      <div>
        <input
        placeholder="who are you?"
        onChange={ (event) => { this.setState({ userInput: event.target.value }) } } />

        <button onClick={ this.props.updateUser(this.state.userInput) }>Submit</button>
      </div>
      }

    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateUser: (user) => { dispatch(newUser(user)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewUserForm)

/*
  So this is a quick and arbitrary example above, and obviously some things aren't
  defined (such as the newUser action-creator). But let's break it down.

  It initializes local state so that this component can keep track of what the
  user types into the input field.

  The render method may look a little funny. It's using JSX to insert lines of
  Javascript. I'm using it to run a ternary operator. If there is already a current
  user, it will just render the <h1> telling them hello. Otherwise, it's going
  to render the input field, and a button.

  When the button is clicked, it will execute the store.dispatch method that
  we have made available to this component through it's props. This dispatch method
  has access to the relevant reducer, which can then update the store to reflect
  who our current user is.

  Also, since we have told this component to be listening to who our current user
  is (in our mapStateToProps function on line 167), once our dispatch updates the
  store successfully, this component will be notified to re-render. This time, it
  will have a user being passed in, so this.props.currentUser will evaluate true.

  The ternary statement will then return the <h1>Hello UserName</h1> instead of
  the input/button (assuming we had placed some falsy value on store for user
  before one is specified).
*/
