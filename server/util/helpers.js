const db = require('../middleware/db.js')


const sessionizeUser = async (email) => {
    const user = await db.getUserByEmail(email);
    return { userId: user.id, username: user.username };
  }

module.exports = sessionizeUser;