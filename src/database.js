const mongoose = require('mongoose');
const URI = 'mongodb://localhost/tasks';

mongoose.connect(URI)
  .then(db => console.log('DB is connect'))
  .catch(error => console.log(error))


module.exports = mongoose;
