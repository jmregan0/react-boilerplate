/*
This file will include a couple examples of React components.

Essentially you have two types:
  1) smart components (stateful)
  2) dumb components (stateless)

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
    <h1>Hello world!</h1>
  )
}


export default SimpleComponent


// Not too bad huh?

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


/********************** Connect Function Coming Soon ******************/
