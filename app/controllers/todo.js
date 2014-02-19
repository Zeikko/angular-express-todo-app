var mongoose = require('mongoose'),
Todo = mongoose.model('Todo');

exports.list = function(request, response){
	Todo.find(function(err, todos){
		if(err){
			response.send(err);
		}
		response.json(todos);
	});
}

exports.create = function(request, response) {
	Todo.create({
		text: request.body.text,
		done: false
	}, function(err, todo) {
		if(err) {
			response.send(err);
		}

		Todo.find(function(err, todos) {
			if(err) {
				response.send(err);
			}
			response.json(todos);
		});
	});
}

exports.delete = function(request, response) {
	Todo.remove({
		_id : request.params.todo_id
	}, function(err, todo) {
		if(err) {
			response.send(err);
		}

		Todo.find(function(err, todos) {
			if(err) {
				response.send(err);
			}
			response.json(todos);
		});
	});
}