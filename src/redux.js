/**
 * createStore()
 *
 * @param {object} intialState
 * @param {function} reducer
 *
 * @return {object} store instance
 */

 function createStore (initialState, reducer) {
   var state = intialState;
   var listeners = [];

   var getState = () => state;

   var dispatch = action => {
     state = reducer(state, action);
     listeners.forEach(l => l());
   };

   var subscribe = l => listeners.push(l);

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
   return {
     count: countReducer(state.count, action),
     todos: todoReducer(state.todos, action)
   };
 }

 function countReducer(state, action) {
   if (action.type === 'INCREMENT') {
     return state + 1;
   }
   if (action.type === 'DECREMENT') {
     var newCount = state - 1;
     return newCount > -1 ? newCount : state;
   }
   return state;
 }

 function todoReducer(state, action) {
   if (action.type === 'ADD_TODO') {
     return [...state, {
       id: action.id,
       text: action.text,
       completed: false
     }];
   }
   if (action.type === 'REMOVE_TODO') {
     return [...state].filter(todo => todo.id !== action.id);
   }
   if (action.type === 'TOGGLE_TODO') {
     return [...state].map(todo => Object.assign({}, todo, {
       completed: !todo.compeleted
     }));
   }
   return state;
 }

/*
 * Initialise for playground
 */

var initialState = {
  counter: 0,
  todos: []
};

var store = createStore(initialState, reducer);
