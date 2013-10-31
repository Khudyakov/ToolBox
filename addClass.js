function addClass(node, className) {
	if ((node) && (className)) {
		var classArr = node.className.split(' ');

		if (Object.prototype.toString.call(className) !== '[object Array]') {
			className = className.split(' ');
		}

		className = className.filter(function(iArr) {
			return classArr.indexOf(iArr) === -1;
		});

		className.forEach(function(iArr) {
			classArr.push(iArr);
		});

		node.className = classArr.join(' ');

	}

}