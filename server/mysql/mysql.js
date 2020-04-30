// mysql/index.js

var mysql = require('mysql');

var pool  = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'test'
});


class Mysql {
    query (param) {
      return new Promise((resolve, reject) => {
        pool.query('SELECT * from egg_users WHERE id = ' + param, function (error, results, fields) {
            if (error) {
                throw error
            };
            resolve(results)
            // console.log('The solution is: ', results[0].solution);
        });
      })
    }
}

module.exports = new Mysql()