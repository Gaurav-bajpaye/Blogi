const pool = require('../config/db');

class User {
  static async createUser(username, password) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = `
      INSERT INTO users (username, password)
      VALUES ($1, $2)
      RETURNING id, username;
    `;
    const values = [username, hashedPassword];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async findUserByUsername(username) {
    const query = 'SELECT * FROM users WHERE username = $1;';
    const { rows } = await pool.query(query, [username]);
    return rows[0];
  }
}

module.exports = User;