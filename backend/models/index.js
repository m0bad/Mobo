const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/Mobo', {
    KeepAlive: true,
    useNewUrlParser: true
});

module.exports.User = require('./user');
module.exports.Team = require('./team');
module.exports.Complain = require('./complain');
module.exports.Message = require('./message');
