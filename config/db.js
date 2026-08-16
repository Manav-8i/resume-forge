const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'SOUL_168204_op',
  database: process.env.DB_NAME || 'Manav_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test database connection on start
db.getConnection()
  .then((connection) => {
    console.log(`Connected to MySQL database: ${process.env.DB_NAME || 'Manav'}`);
    connection.release();
  })
  .catch((err) => {
    console.error('Database connection failed:', err.message);
  });

module.exports = db;