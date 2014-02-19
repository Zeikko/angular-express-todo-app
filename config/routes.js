module.exports = function(app){

	var todo = require('../app/controllers/todo');
	app.get('/api/todos', todo.list);
	app.post('/api/todos', todo.create);
	app.delete('/api/todos/:todo_id', todo.delete);

	var home = require('../app/controllers/home');
	app.get('/', home.index);
};
