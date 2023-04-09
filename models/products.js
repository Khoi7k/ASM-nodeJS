var db=require('./database'); 
exports.list = async function() { 
    const sql = `SELECT *  FROM products`;
    const [d] = await db.query(sql)
    return d
}
exports.create = async function(data) { //hàm chèn user mới vào table 
    const sql = 'INSERT INTO products SET ?';
    const [d] = await db.query(sql,data)
    return d
} 
exports.update = async function(id, data) { 
    const sql = 'UPDATE products  SET ? WHERE id = ?';
    const [d] = await db.query(sql,data,id)
    return d    
} 
exports.read= async function(id) {
    const sql = 'SELECT * FROM products WHERE id = ?'    
    const [d] = await db.query(sql,id)
    return d
} 
exports.deletee = async function (id) { 
    const sql = 'DELETE FROM products WHERE id = ?'
    const [data] = await db.query(sql, id)
}
exports.listSpecial = async function() { 
    const sql = `SELECT *  FROM products WHERE special = 1`;
    const [d] = await db.query(sql)
    return d
}
exports.listCate = async function(id) { 
    const sql = `SELECT *  FROM products WHERE id_cate= ?`;
    const [d] = await db.query(sql, id)
    return d;
}