const { Pool } = require('pg');

const pool = new Pool({
    user: 'root',
    host: 'localhost',
    database: 'BookTrack',
    password: 'root',
    port: 5432,
});

console.log(await pool.query('SELECT NOW()'))