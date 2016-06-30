describe('Redux', function(){
  context('createStore()', function() {
    var _store;
    beforeEach(function () {
      _store = createStore({ count: 0 }, function (state, action) {
        if (action.type === 'INCREMENT') {
          return { count: state.count + 1 };
        }
        return state;
      });
    });
    afterEach(function () {
      _store = null;
    });
    it('gets the current state', function() {
      expect(_store.getState()).to.eql({ count: 0})
    });
    it('updates the state when actions are dispatched', function() {
      _store.dispatch({ type: 'INCREMENT' });
      expect(_store.getState().count).to.eql(1);
    });
    it('call subscribers when actions are dispatched', function (done) {
      _store.subscribe(done);
      _store.dispatch({});
    })
  });
  context('reducer: counter', function() {
    var initialState = { count: 0 };
    it('does not mutate the current state', function () {
      var newState = [
        initialState,
        { type: 'INCREMENT' },
        { type: 'DECREMENT' }
      ].reduce(reducer);
      expect(initialState).to.eql({ count: 0 });
      expect(newState).to.not.equal(initialState);
    });
    it('increments the count when called with action { type: INCREMENT }', function () {
      var newState = [
        initialState,
        { type: 'INCREMENT' }
      ].reduce(reducer);
      expect(newState.count).to.equal(1);
    });
    it('decrements the count when called with action { type: DECREMENT }', function () {
      var newState = [
        initialState,
        { type: 'INCREMENT' },
        { type: 'INCREMENT' },
        { type: 'DECREMENT' }
      ].reduce(reducer);
      expect(newState.count).to.equal(1);
    });
    it('does not decrement the count below zero', function () {
      var newState = [
        initialState,
        { type: 'DECREMENT' },
        { type: 'DECREMENT' }
      ].reduce(reducer);
      expect(newState.count).to.equal(0);
    });
  });
  context('reducer: todos', function() {
    var initialState = { todos: [] };
    it('does not mutate the current state', function () {
      var newState = [
        initialState,
        { type: 'ADD_TODO' },
        { type: 'TOGGLE_TODO' },
        { type: 'REMOVE_TODO' }
      ].reduce(reducer);
      expect(initialState).to.eql({ todos: [] });
      expect(newState).to.not.equal(initialState);
    });
    it('adds a new todo when called with action { type: ADD_TODO, id: INT, text: STRING }', function () {
      var todos = [
        initialState,
        { type: 'ADD_TODO', text: 'Test', id: 0 }
      ].reduce(reducer).todos;
      expect(todos[0]).to.have.property('text', 'Test');
    });
    it('removes a todo when called with action { type: REMOVE_TODO, id: INT }', function () {
      var todos = [
        initialState,
        { type: 'ADD_TODO', text: 'Test', id: 0 },
        { type: 'ADD_TODO', text: 'Test', id: 1 },
        { type: 'REMOVE_TODO', id: 0 }
      ].reduce(reducer).todos;
      expect(todos).to.have.length(1);
    });
    it('toggles a todo completed property when called with action { type: TOGGLE_TODO, id: INDEX }', function () {
      var todos = [
        initialState,
        { type: 'ADD_TODO', text: 'Test', id: 1 },
        { type: 'TOGGLE_TODO', id: 1 }
      ].reduce(reducer).todos;
      expect(todos[0]).to.have.property('completed', true);
    });
  });
});
