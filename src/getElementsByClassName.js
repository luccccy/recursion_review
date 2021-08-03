// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {

  var nodeList = [];

  var findNodes = function(node) {

    if (node.classList && node.classList.contains(className)) {
      nodeList.push(node);
    }

    var children = node.childNodes;
    for (var i = 0; i < children.length; i++) {
      findNodes(children[i]);
    }
  };
  findNodes(document.body);

  return nodeList;
};
