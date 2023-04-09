var db = require('./database'); 

exports.list = async function () {  
    let sql = `SELECT * FROM categories`
    const [data] = await db.query(sql)
    return data 
}
// exports.create = function(data, callback ) {
//     let sql = 'INSERT INTO categories SET ?';
//     db.query(sql, data, function(err, d) { callback(d) }  );    
// } 
// exports.update = function(id, data, callback) { 
//     let sql = 'UPDATE categories  SET ? WHERE id = ?';
//     db.query(sql, [data, id], (err, d) => {
//         if (err) throw err;
//         callback();
//     });    
// } 
// exports.read= function(id, callback) {
//     let sql = 'SELECT * FROM categories WHERE idU = ?'    
//     db.query(sql, id, (err, d) => {
//         data = d[0]; 
//         callback(data);
//     });
// } 