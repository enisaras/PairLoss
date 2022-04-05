module.exports = require("./server.js")


// server/index.js












/*
const express = require("express");
const router = express.Router();
const cors = require("cors");
const mysql = require('mysql');
const bcrypt = require("bcrypt");
const db = require("../server/middleware/db")
const session = require('express-session');
const mysqlStore = require('express-mysql-session')(session);
//import { PORT, DB_HOST, DB_NAME, DB_PASSWORD, DB_USER, DB_PORT, NODE_ENV, SESS_LIFETIME, SESS_NAME, SESS_SECRET } from '../config';



const PORT = process.env.PORT || 3003;
const app = express();
app.use(express.json());
const options = {
  connectionLimit: 10, 
  password: ,
  host: ,
  user:  ,
  database:,
  port: 3306,
}
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const con = mysql.createPool({
options;
});

const sessionStore = new mysqlStore({createDatabaseTable:true}, con);

app.use(session({
  name: 'sid',
  secret: 'secret!session',

  saveUninitialized: false,
  resave: false,
  store: sessionStore,
  cookie: {
    sameSite: true,
    secure: 'production',
    maxAge: 1000 * 60 * 60 *2,
  }
}));
con.getConnection((err, connection) => {
  if (err) throw (err);
  console.log("Connected: " + connection.threadId);
});

app.post("/createUser", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await db.insertUser(email, hashedPassword).then(insertId => {return db.getUser(insertId);});
  req.session.userId = user.id
/*
    con.getConnection(async (err, connection) => {
        if (err) throw (err);

        //const sqlSearch = "SELECT * FROM userTable WHERE email = ?";
        //const search_query = mysql.format(sqlSearch,[email]);
        //const sqlInsert = "INSERT INTO userTable VALUES (0,?,?)";
        //const insert_query = mysql.format(sqlInsert,[email, hashedPassword]);
        
        await connection.query(search_query, async (err, result) => {
          if (err) throw (err);
          console.log('------> Search');
          console.log(result.length);

          if (result.length != 0){
            connection.release();
            console.log('--------> User Exists');
            res.sendStatus(409);
          }
          else {
            await connection.query(insert_query, (err, result) => {
              connection.release();
              if (err) throw (err);
              console.log(result.insertId);
              req.session.userId = result.insertId;
              res.sendStatus(201);
            });
          }
        });
    });
    
  });

app.get('/session', function(req, res){
  res.json(req.session)
  res.json(req.session.userId);
});
//LOGIN (AUTHENTICATE USER)
app.post("/login", async (req, res)=> {
  const email = req.body.email;
  const password = req.body.password;

  user = await db.getUserByEmail(email);
   if(!user){
        return res.send({
            message: "Invalid email"
        })
    }
    if(user.password !== password){
        return res.send({
            message: "Invalid  password"
        })
    
    }
    else{
      req.session.userId = user.id;
    }
    
    


  i
  /*
  con.getConnection ( async (err, connection)=> {
   if (err) throw (err)
   const sqlSearch = "Select * from userTable where email = ?"
   const search_query = mysql.format(sqlSearch,[email])
   await connection.query (search_query, async (err, result) => {
    connection.release()
    
    if (err) throw (err)
    if (result.length == 0) {
     console.log("--------> User does not exist")
     res.sendStatus(404)
    } 
    else {
       const hashedPassword = result[0].password
       //get the hashedPassword from result
      if (await bcrypt.compare(password, hashedPassword)) {
      console.log("---------> Login Successful")
      res.send(`${email} is logged in!`)
      } 
      else {
      console.log("---------> Password Incorrect")
      res.send("Password incorrect!")
      } 
    }
   })
  })
   
  }) 

//LOGOUT
app.post('/logout', (req,res) => {
  req.session.destroy(err => {
    if(err){
        console.log(err);
    }
    sessionStore.close();
    res.clearCookie('sid');
})

})
*/
//app.listen(PORT, () => {
  //console.log(`Server listening on ${PORT}`);
//});