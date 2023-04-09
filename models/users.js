var db = require('./database'); 
exports.list = async function() { 
    const sql = `SELECT *  FROM users`;
    const [d] = await db.query(sql)
    return d
}
exports.create = async function(data) { //hàm chèn user mới vào table 
    const sql = 'INSERT INTO users SET ?';
    const [d] = await db.query(sql,data)
    return d
}
exports.selectByEmail = async function (email) { 
    let sql = 'SELECT * FROM users WHERE email = ?'
    const [d] = await db.query(sql, email)
    return d
}
// exports.update = function(id, data, callback) { 
//     let sql = 'UPDATE users  SET ? WHERE idUser = ?';
//     db.query(sql, [data, id], (err, d) => {
//         if (err) throw err;
//         callback();
//     });    
// } 
// exports.read= function(id, callback) {
//     let sql = 'SELECT * FROM users WHERE idUser = ?'    
//     db.query(sql, id, (err, d) => {
//         data = d[0]; 
//         callback(data);
//     });
// } 