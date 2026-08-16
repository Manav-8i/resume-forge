const pool = require('../config/db');

const DbQueries = {
  findUserByEmail: async (email) => {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows[0];
  },
  createUser: async (name, email, hashedPassword) => {
    const [result] = await pool.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword]
    );
    return result.insertId;
  },

  getUserDocuments: async (userId) => {
    const [rows] = await pool.query('SELECT * FROM documents WHERE user_id = ? ORDER BY updated_at DESC', [userId]);
    return rows;
  },
  createDocument: async (userId, title, templateId, content) => {
    const [result] = await pool.query(
      'INSERT INTO documents (user_id, template_id, title, content) VALUES (?, ?, ?, ?)',
      [userId, templateId || 1, title, JSON.stringify(content || {})]
    );
    return result.insertId;
  },

  getUserApplications: async (userId) => {
    const [rows] = await pool.query('SELECT * FROM applications WHERE user_id = ? ORDER BY applied_date DESC', [userId]);
    return rows;
  },
  createApplication: async (userId, company, position, status, appliedDate) => {
    const [result] = await pool.query(
      'INSERT INTO applications (user_id, company, position, status, applied_date) VALUES (?, ?, ?, ?, ?)',
      [userId, company, position, status || 'Pending', appliedDate]
    );
    return result.insertId;
  },

  getUserExports: async (userId) => {
    const [rows] = await pool.query('SELECT * FROM exports WHERE user_id = ? ORDER BY exported_at DESC', [userId]);
    return rows;
  },
  createExport: async (userId, documentId, fileName, fileFormat) => {
    const [result] = await pool.query(
      'INSERT INTO exports (user_id, document_id, file_name, file_format) VALUES (?, ?, ?, ?)',
      [userId, documentId, fileName, fileFormat || 'PDF']
    );
    return result.insertId;
  }
};

module.exports = DbQueries;