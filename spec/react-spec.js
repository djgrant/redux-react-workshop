var e = React.createElement;
var list = e('ul', {}, [
  e('li', {}, 'One'),
  e('li', {}, 'Two'),
]);

describe('React', function(){
  context('React.createElement', function() {
    it('creates a virtual element', function() {
      expect(React.createElement('div', {}, 'test'))
        .to.eql({
          type: 'div',
          props: {},
          children: 'test'
        });
    });
    it('can be used to build a virtual DOM tree', function () {
      expect(list).to.eql({
        type: 'ul',
        props: {},
        children: [
          {
            type: 'li',
            props: {},
            children: 'One'
          },
          {
            type: 'li',
            props: {},
            children: 'Two'
          }
        ]
      });
    });
  });
  context('React.convertToDOMTree', function() {
    var DOMTree = React.convertToDOMTree(list);
    it('returns a text node if the element is a string', function () {
      var textNode = React.convertToDOMTree('string');
      var isTextNode = textNode.toString() === '[object Text]';
      expect(isTextNode).to.equal(true);
    });
    it('returns a DOM element', function() {
      var isNode = DOMTree instanceof Node;
      expect(isNode).to.equal(true);
    });
    it('has children rendered inside the parent node', function () {
      expect(DOMTree.children.length).to.equal(2);
    });
  });
  context('React.render', function () {
    var DOMTree = React.convertToDOMTree(list);
    var root = document.createElement('div');
    it('renders the virtual tree as a DOM tree in a given element', function () {
      React.render(root, list);
      expect(root.children[0].toString()).to.equal('[object HTMLUListElement]');
    });
    it('re-renders', function () {
      React.render(root, list);
      expect(root.children.length).to.equal(1);
    });
  })
});
