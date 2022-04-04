const mysql = require('mysql');
//import { PORT, DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, DB_PORT, NODE_ENV, SESS_LIFETIME, SESS_NAME, SESS_SECRET } from '../config.js';

const pool = mysql.createPool({
    connectionLimit: 10, 
    password: ,
    host: ,
    user:  ,
    database:,
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

db.insertUser = (email, password) =>{
    return new Promise((resolve, reject)=>{
        pool.query('INSERT INTO userTable (email, password) VALUES (?, ?)', [email, password], (error, result)=>{
            if(error){
                return reject(error);
            }
            
              return resolve(result.insertId);
        });
    });
};
module.exports = db