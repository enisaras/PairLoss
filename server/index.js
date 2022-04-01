// server/index.js
const express = require("express");
const router = express.Router();
const cors = require("cors");
const mysql = require('mysql');
const bcrypt = require("bcrypt");



const PORT = process.env.PORT || 3003;
const app = express();
app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const con = mysql.createPool({
    host: ,
    user: ,
    password: ,
    database: "main",
    port: '3306',
});

con.getConnection((err, connection) => {
  if (err) throw (err);
  console.log("Connected: " + connection.threadId);
});

app.post("/createUser", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
    con.getConnection(async (err, connection) => {
        if (err) throw (err);

        const sqlSearch = "SELECT * FROM userTable WHERE email = ?";
        const search_query = mysql.format(sqlSearch,[email]);
        const sqlInsert = "INSERT INTO userTable VALUES (0,?,?)";
        const insert_query = mysql.format(sqlInsert,[email, hashedPassword]);
        
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
              res.sendStatus(201);
            });
          }
        });
    });
  });


//LOGIN (AUTHENTICATE USER)
app.post("/login", (req, res)=> {
  const email = req.body.email;
  const password = req.body.password;
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
      } //end of bcrypt.compare()
    }//end of User exists i.e. results.length==0
   }) //end of connection.query()
  }) //end of db.connection()
  }) //end of app.post()


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});