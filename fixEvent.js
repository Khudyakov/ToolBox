function fixEvent(event) {

	if (event.pageX === null && event.clientX !== null) {
		var html = document.documentElement;
		var body = document.body;

		event.pageX = event.clientX + (html.scrollLeft || body && body.scrollLeft || 0);
		event.pageX -= html.clientLeft || 0;

		event.pageY = event.clientY + (html.scrollTop || body && body.scrollTop || 0);
		event.pageY -= html.clientTop || 0;
	}

	if (!event.which && event.button) {
		event.which = event.button & 1 ? 1 : (event.button & 2 ? 3 : (event.button & 4 ? 2 : 0))
	}

	return event;
}