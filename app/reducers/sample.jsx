

// ****** FOR USE WITH REDUX ***********************************

/* ****** Action-Types *****************************************

  These are basically the types of actions you anticipate having.
  They can be things like RETRIEVE_DATA or UPDATE_USER.
  Basically their naming convention surrounds the 'way' you are
  intending to update your applications state with that action.
  It should do a simple thing, and it's naming should reflect
  what it actually does.

  They are actually just variables that have a string value of
  exactly what they are named. This is to avoid typos in the
  reducer, and also to have clearly defined things up front that we
  are allowed to do to our state.

  Example:
*/

const UPDATE_DATA = 'UPDATE_DATA';
const UPDATE_USER = 'UPDATE_USER';

// ******** Set Initial State **********************************

const initialState = { }
  /*
  Initialize state to the data type you expect

  if it will be an array of names, initialize it like this:

  initialState = {
    names: [];
  }

  */


/* ******** Action-Creators ***********************************

  These are just functions that return objects with two properties:
    1) type (which will be one of those constants from above)
    2) some sort of payload

  They are exported because they will ultimately be used by our
  front end components (when user action happens, for example)

  Example below
*/
export const updateCurrentUser = (user) => {
  return {
    type: UPDATE_USER,
    user
  }
}

export const updateDataSet = (data) => {
  return {
    type: UPDATE_DATA,
    data
  }
}

/*
  Not too complicated. Ultimately when this action creator is
  dispatched it's going to hit our reducer down at the bottom of
  this file. You can skip ahead to that and just take a quick look
  at it.

  You will notice that its just a function that
  accepts state and action as its 2 arguments. The action creator you
  just saw above will be passed in as the second argument (action).

  Ultimately that action creator makes it down into the switch statement
  which will do different things with that action object (the object
  that your action-creator returns) based on it's type.
*/

/* ****** Thunks *************************************************

 A thunk is nothing more than an action creator that does some sort
 of asynchronous call first. Just think of it as a function that
 ultimately intends to dispatch an action creator, but doesn't have
 the data to send along with it yet, so it needs to make some sort of
 async call.

 Example below:
*/

export const fetchData = () =>
  // implicit return of function below, which accepts dispatch
  (dispatch) => {
    // does its async data fetching
    // would need to import axios above for this to work...
    axios.get('https://some_endpoint')
    .then(result => {

      let data = result.body

      // now that we have our data, we can call an action-creator
      // from our group of action creators above, and pass along
      // our newly retrieved data.
      dispatch(updateDataSet(data))

    })
  }

/* ****** Reducer **************************************************

  So all those tools above were basically to make all the actions
  we intend to perform very pre-defined and clear-cut. However, the only
  thing that actually want to give TRUE access to our store's state is
  our reducer here below. On principle it will not mutate state.

  Take a quick look at this
  https://redux.js.org/docs/basics/Reducers.html

  Or just read this snippet from the docs --

  Note that:

  1) We don't mutate the state. We create a copy with Object.assign(). You must supply an empty object as the first parameter. You can also enable the object spread operator proposal to write { ...state, ...newState } instead.

  2) We return the previous state in the default case. It's important to return the previous state for any unknown action.


  Notice this reducer is the default export of this file. If you look in
  reducers/index.jsx you will see something called combineReducers with
  this reducer being passed in. This is so that you can have a store
  state that is made up of many reducers. Each reducer will end up being
  a single slice of that store state.
*/

export default function(state=initialState, action) {
  const newState = Object.assign({}, state)

  switch (action.type) {
    case UPDATE_USER:
      newState.user = action.user
      break
    default:
      return state
  }
  return newState
}
