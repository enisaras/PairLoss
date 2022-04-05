const joi = require('joi')
const express = require('express')
const db = require('../middleware/db.js')
const user_vals = require('../validations/user.js')


const userRoutes = express.Router();

userRoutes.post("", async (req,res) => {
    try {
        const { username, email, password } = req.body
        //await joi.validate({ username, email, password }, user_vals.signUp);
            const user = await db.insertUser(username, email, hashedPassword).then(insertId => {return db.getUser(insertId);});
            res.send({ userId: user.id, username: user.username });
        
        

} catch(err) {
    res.status(400).send(err);
}
});