const knex = require('knex');
const knexfile = require('./knexfile');
const config = knexfile.development;

module.exports = knex(config);
