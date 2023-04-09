const mysql = require('mysql2/promise');

// create a connection pool
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'asmnodejs',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

db.getConnection()
.then((data) => {
  console.log('Đã kết nối database');
})
.catch(err => {
  console.log('Lỗi kết nối database');
})

module.exports = db