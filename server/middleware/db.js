const mysql = require('mysql');
require('dotenv').config({path: '/home/enis/PairLoss/server/.env'});

const pool = mysql.createPool({
    connectionLimit: 10, 
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    user:  process.env.DB_USER,
    database: process.env.DB_NAME,
    port: 3306,
})
db = {};

 db.getUser = (id) =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM userTable WHERE id= ?', [id], (error, user)=>{
            if(error){
                return reject(error);
            }
            return resolve(user);
        });
    });
};
db.getUserByEmail = (email) =>{
    return new Promise((resolve, reject)=>{
        pool.query('SELECT * FROM userTable WHERE email = ?', [email], (error, users)=>{
            if(error){
                return reject(error);
            }
            return resolve(users[0]);
        });
    });
};
db.checkEmailExists = (email) => {
    const sqlSearch = "SELECT * FROM userTable WHERE email = ?";
    const search_query = mysql.format(sqlSearch,[email]);
    return new Promise((resolve, reject)=>{
    pool.query(search_query, async (err, result) => {
        if (err) throw (err);
        console.log('------> Search');

        if (result.length != 0){
          pool.release();
          console.log('--------> User Exists');
          return reject(error);
        }
    return resolve(true);
    });
    });
}
db.insertUser = (username, email, password) =>{
    return new Promise((resolve, reject)=>{
        pool.query('INSERT INTO userTable (username, email, password) VALUES (?, ?, ?)', [username, email, password], (error, result)=>{
            if(error){
                return reject(error);
            }
            
              return resolve(result.insertId);
        });
    });
};
module.exports = db