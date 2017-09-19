var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = {
    host: 'ec2-23-23-248-247.compute-1.amazonaws.com',
    database: 'darkbsuln8ec23',
    port: 5432,
    user: 'erjeybddobfoqq',
    password: '2fe6da0f8e4cb91c8554bc66bff59705b4b117281114286be155253ef6abf657',
    ssl: true
};
var connection = pgp(connectionString);

module.exports = connection;