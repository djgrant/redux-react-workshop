/*
 * If you've not yet read the readme on Redux, head over there first
 * If you've already read the readme, hi again!
 *
 * In this challenge we'll write a store factory function
 *
 * It needs to:
 * - Hold the current state
 * - Create a new version of the state when an action is dispatched into it
 * - Call subscribers when the state changes
 */


/**
 * createStore()
 *
 * @param {object} intialState
 * @param {function} reducer
 *
 * @return {object} store instance
 */

function createStore (initialState, reducer) {
  // Your code...
  var getState = function () {};
  var dispatch = function () {};
  var subscribe = function () {};

  return { getState, dispatch, subscribe };
}


/*
 * reducer()
 * Pass this into your createStore() factory
 * Top tip: never mutate the state!
 *
 * @param {object} state
 * @param {object} action with shape { type: STRING, ...params }
 *
 * @return {object} new state
 */

function reducer (state, action) {
  // Your code...
  return state;
}

/*
 * Example initialisation
 */

var initialState = {
  counter: 0,
  todos: []
};

var store = createStore(initialState, reducer);
