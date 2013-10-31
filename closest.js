var closest = function(node, callback) {
		var nextParent = node;

		while (nextParent && (!callback(nextParent))) {
			nextParent = nextParent.parentNode;
		}
		return nextParent;
	}


closest(document.body, function(node) {
	return node.nodeName === 'BODY';
});