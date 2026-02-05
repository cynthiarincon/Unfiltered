const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'test',
});

// Don't crash if database fails - just log it
connection.connect((err) => {
  if (err) {
    console.error('⚠️ Database connection failed:', err.message);
    console.log('App will run but database features will not work');
  } else {
    console.log('✅ Database connected successfully');
  }
});

// Prevent app crash on database errors
connection.on('error', (err) => {
  console.error('Database error:', err);
});

module.exports = connection;