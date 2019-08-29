const { Client } = require('pg');
const initDB = require('./initDB');

 const client = new Client({
   user: 'postgres',
   host: '127.0.0.1',
   database: 'ANIVEO',
   password: 'root',
   port: 4444,
 });

client = new Client();

client.connect();

initDB(client, function(){
  console.log("BD lista");
});

module.exports = client;
