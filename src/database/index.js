import { Pool } from 'pg';

 const client = new Pool({
   user: 'postgres',
   host: '127.0.0.1',
   database: 'ANIVEO',
   password: 'root',
   port: 4444,
 });

client.connect(() => {
  console.log("conetado")
});

const getLink = () => {
  client.query('SELECT * FROM pelicula', (error, response) => {
    console.log('response: ', response);
  });
}

module.exports = {
  getLink,
};
