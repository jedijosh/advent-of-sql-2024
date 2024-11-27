'use strict';

var dbm;
var type;
var seed;
const fs = require('fs').promises
const path = require('path')

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = async function(db) {
  console.log('in up function')
  let sqlFile = path.join(__dirname, 'sql', '2024110718000077-example-up.sql')
  // Read the SQL file and return the contents
  const fileContents = await fs.readFile(sqlFile, {encoding: 'utf-8'})
  console.log('SQL to run:', fileContents)
  return db.runSql(fileContents)
};

exports.down = async function(db) {
  console.log('in down function')
  let sqlFile = path.join(__dirname, 'sql', '2024110718000077-example-up.sql')
  // Read the SQL file and return the contents
  const fileContents = await fs.readFile(sqlFile, {encoding: 'utf-8'})
  console.log('SQL to run:', fileContents)
  return db.runSql(fileContents)
};

exports._meta = {
  "version": 1
};
