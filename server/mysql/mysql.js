// mysql/index.js

var mysql = require('mysql');

var pool  = mysql.createConnection({
  host     : '121.**.**.198',
  user     : 'root',
  password : 'ly****25',
  database : 'userDB'
});


class Mysql {
    query (param) {
      return new Promise((resolve, reject) => {
        pool.query(`SELECT * from user WHERE name = "${param}"`, function (error, results, fields) {
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