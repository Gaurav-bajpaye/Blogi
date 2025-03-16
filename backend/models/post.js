const pool = require('../config/db');

class Post {
  static async createPost(title, content, authorId) {
    const query = `
      INSERT INTO posts (title, content, author_id)
      VALUES ($1, $2, $3)
      RETURNING id, title, content, created_at, updated_at, author_id;
    `;
    const values = [title, content, authorId];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async getPostById(postId) {
    const query = 'SELECT * FROM posts WHERE id = $1;';
    const { rows } = await pool.query(query, [postId]);
    return rows[0];
  }

  static async updatePost(postId, title, content) {
    const query = `
      UPDATE posts
      SET title = $1, content = $2, updated_at = NOW()
      WHERE id = $3
      RETURNING *;
    `;
    const values = [title, content, postId];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  static async deletePost(postId) {
    const query = 'DELETE FROM posts WHERE id = $1 RETURNING *;';
    const { rows } = await pool.query(query, [postId]);
    return rows[0];
  }

  static async getAllPosts() {
    const query = `
      SELECT posts.*, users.username as author
      FROM posts
      JOIN users ON posts.author_id = users.id
      ORDER BY posts.created_at DESC;
    `;
    const { rows } = await pool.query(query);
    return rows;
  }
}

module.exports = Post;