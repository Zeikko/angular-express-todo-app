exports.index = function(request, response) {
	response.sendfile('./public/html/index.html');
}