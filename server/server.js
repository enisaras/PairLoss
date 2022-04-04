const express = require("express");
const router = express.Router();
const cors = require("cors");
const mysql = require('mysql');
const bcrypt = require("bcrypt");
const db = require("../server/middleware/db")
const session = require('express-session');
const mysqlStore = require('express-mysql-session')(session);

import { userRoutes } from './routes/index.js';

const app = express();
app.disable('x-powered-by');
app.use(express.urlencoded({ extended: true }));

app.use(express.json());
const apiRouter = express.Router();
app.use('/api', apiRouter);
apiRouter.use('/users', userRoutes);
const options = {
    connectionLimit: 10, 
    password: ,
    host: ,
    user:  ,
    database:,
    port: 3306,
  }
  const con = mysql.createPool({
      options
  });

const sessionStore = new mysqlStore({createDatabaseTable:true}, con);

app.use(session({
    name: ,
    secret: ,
  
    saveUninitialized: false,
    resave: false,
    store: sessionStore,
    cookie: {
      sameSite: true,
      secure: 'production',
      maxAge: 1000 * 60 * 60 *2,
    }
  }));



app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
