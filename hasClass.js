function hasClass(node, className) {
	if ((node) && (className)) {
		var classArr = node.className.split(' ');

		if (Object.prototype.toString.call(className) !== '[object Array]') {
			className = className.split(' ');
		}

		return className.every(function(iarr) {
			if (classArr.indexOf(iarr) > -1) {
				return true;
			} else {
				return false;
			}
		});
	}
}