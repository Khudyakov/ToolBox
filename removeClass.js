function removeClass(node, className) {
	if ((node) && (className)) {
		var classArr = node.className.split(' ');

		if (Object.prototype.toString.call(className) !== '[object Array]') {
			className = className.split(' ');
		}

		classArr = classArr.filter(function(iArr) {
			return className.indexOf(iArr) === -1;
		});

		node.className = classArr.join(' ');
	}
}