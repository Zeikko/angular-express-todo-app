// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var TodoSchema = new Schema({
  text: String,
  done: Boolean,
});

TodoSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Todo',TodoSchema);
