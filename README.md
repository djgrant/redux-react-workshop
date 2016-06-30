# Learning Redux and React

```bash
$ git clone https://github.com/djgrant/redux-react-workshop.git
$ cd redux-react-workshop
```

## Redux

Redux is described as a predictable state container for JS apps. Let's break that down...

State container:
- There is a _store_, which contains the current state.
- State objects never change, but new states can be created.
- When a new version of the state is created, the store lets go of the old state and references the new state instead.

Predictable:
- You can dispatch actions into the store - that will result in a new state being created.
- Actions are handled by pure function, known as reducers.
- Given an initial state and a certain action, the next state will always be the same.

For JS apps:
- Functions can subscribe to state changes
- They are called whenever an action is dispatched
- Ideal for triggering a view re-render
- Doesn't need to be JavaScript, we could write this in any language

What does this look like in practice?
- store.getState() // returns the current state
- store.dispatch(action) // dispatches an action ({ type: STRING, ...params }) into the store
- store.subscribe(listener) // subscribes a listener to state changes

<!-- Interactive box model -->

Right, enough talk, let's build a Redux!

`$ open reduxSpec.html`
Then, in your IDE open src/redux.js where we'll continue the lesson over there!


## Credits & resources
[Redux](http://redux.js.org)
[Getting start with Redux screencast](https://egghead.io/courses/getting-started-with-redux)
