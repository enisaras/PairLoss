const express = require("express");
const cors = require("cors");
const mysql = require('mysql');
const bcrypt = require("bcrypt");
const db = require("../server/middleware/db")
const session = require('express-session');
const joi = require('joi')
const mysqlStore = require('express-mysql-session')(session);
require('dotenv').config({path: '/home/enis/PairLoss/server/.env'})
const {signIn, signUp} = require('./validations/user.js')
const sessionizeUser = require('./util/helpers.js')


const app = express();
app.use(cors({credentials: true,
  origin: 'http://localhost:3000'}))
app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const con = mysql.createPool({
    connectionLimit: 10, 
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    user:  process.env.DB_USER,
    database: process.env.DB_NAME,
    port: 3306,
  });

con.getConnection((err, connection) => {
  if (err) throw (err);
  console.log("Connected: " + connection.threadId);
  });

const sessionStore = new mysqlStore({}, con);

app.use(session({
    name: process.env.SESS_NAME,
    secret: process.env.SESS_SECRET,
  
    saveUninitialized: false,
    resave: false,
    store: sessionStore,
    cookie: {
      secure: false,
      sameSite: true,
      maxAge: 1000 * 60 * 60 *2,
    }
  }));
  const userRoutes = express.Router();
  const apiRouter = express.Router();
  const sessionRouter = express.Router();
  
  app.use('/api', apiRouter);
  apiRouter.use('/users', userRoutes);
  apiRouter.use('/session', sessionRouter);

userRoutes.post("", async (req,res) => {
try {
    const { username, email, password } = req.body;
    // await joi.validate({ username, email, password }, signUp);


    const user = await db.insertUser(username, email, password).then(insertId => {return db.getUser(insertId);});
    const session = await sessionizeUser(email);
    
    console.log(session);
    req.session.user = session;
    console.log(req.session);
    res.send(session);
    
} catch(err) {
  res.status(400).send(err);
}
});
sessionRouter.post("", async (req, res) => {
  try {
    const { email, password } = req.body
    // await Joi.validate({ email, password }, signIn);
    const user = await db.getUserByEmail(email);
    if (user) {
      const sessionUser = await sessionizeUser(email);
      req.session.user = sessionUser;
      res.send(sessionUser);
    } else {
      throw new Error('Invalid login credentials');
    }
    
  } catch (err) {
    res.status(401).send(err);
    console.log(err);
  }
});

sessionRouter.delete("", (req, res) => {
  try {
    console.log(req.session);
    const user = req.session.user;
    if (user) {
      req.session.destroy(err => {
        if (err) throw (err);
        res.clearCookie(process.env.SESS_NAME);
        res.send(user);
      });
    } else {
      throw new Error('Something went wrong');
    }
  } catch (err) {
    console.log(err);
    res.status(422).send(err);
  }
});
sessionRouter.get("", ({ session: { user }}, res) => {
  res.send({ user });
});


app.listen(3003, () => console.log(`Listening on port ${3003}`))
