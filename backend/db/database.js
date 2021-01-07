const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host: 'bggo5u1folxd9on8i68u-mysql.services.clever-cloud.com',
  user: 'ur103ghqcw9fwofy',
  password: 'TROohB9HZ7mbWCEK1AlI',
  database: 'bggo5u1folxd9on8i68u',
  multipleStatements: true
});


mysqlConnection.connect(function(err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('Base de Datos conectada!');
  }
});

module.exports = mysqlConnection;