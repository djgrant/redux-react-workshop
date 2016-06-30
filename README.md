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
- `store.getState()` - returns the current state
- `store.dispatch(action)` - dispatches an action ({ type: STRING, ...params }) into the store
- `store.subscribe(listener)` - subscribes a listener to state changes

<!-- Interactive box model -->

Right, enough talk, let's build a Redux!

`$ open redux-spec.html`

Then, in your IDE open src/redux.js where we'll continue the lesson over there!

## React

Unlike Redux, React is powerful framework with many features. In general terms it is a view library, although it's most powerful feature - views as pure function of the state passed into them - is simple(ish) to implement.

The clever way that React achieves this functional purity is by converting its views into a virtual DOM tree and working on it instead of the browsers DOM. When the virtual DOM changes it can be re-rendered in the browser, but because the virtual DOM is a simple data structure, the changes to it can be diffed allowing the framework to only minimially touch the DOM.

In this workshop we will won't be worrying about writing a diffing algorithm (although feel free to follow the article at the bottom if you fancy giving it a go). Instead we'll focus on creating a virtual DOM tree and rendering it in the browser.

Take the following HTML:

```html
<ul id="list">
  <li>One</li>
  <li>Two</li>
</ul>
```

How would you represent this as a hash?

```js
{
  type: 'ul',
  props: {
    id: 'list'
  },
  children: [
    { type: li, props: {}, children: 'One' }
    { type: li, props: {}, children: 'Two' }
  ]
}
```

Each element is identified with a `type`, `props` and `children`. `children` is an array of additional elements, so we can build an entire nesting elements inside of their `children` property until eventually we end with a text node.

To generate a tree we can create a helper that generates elements:

```js
createElement('ul', { id: 'list' },
  createElement('li', {}, 'One'),
  createElement('li', {}, 'Two')
);
```

One of the big innovations of React however was to build an abstract tree from XML using [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html). So, if we go back to our original piece of HTML and run it through a JSX parse it will generate something uncannily similar:

```js
React.createElement('ul', { id: 'list' },
  React.createElement('li', {}, 'One'),
  React.createElement('li', {}, 'Two')
);
```

Before you jump into the challenge let me just explain how you can use JSX if you get the urge. In both the playground and spec documents a runtime JSX compiler is included in the page. It will parse HTML in your JavaScript down to `React.createElement` calls.

```js
<script type="text/babel">
var test = (
  <div>It worked {codeExecutesInsideTheseBraces}</div>
);
console.log(test);
</script>
```

Seeing as the parser is probably evaling your code, you'll need to serve the page over something other than the file protocol and add a `type="text/babel"`` attribute to non-inline script tags if you want to play with JSX in them.

Enough chatter! Let's code!

`$ open react-spec.html` (or `$ npm i http-server -g && http-server`)

And then meet me over at src/redux.js

## Inspiration
http://redux.js.org

https://egghead.io/courses/getting-started-with-redux

https://medium.com/@deathmood/how-to-write-your-own-virtual-dom-ee74acc13060#.u8ivxgvhm
