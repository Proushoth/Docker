const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = process.env.PORT || 3000;

const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

async function initDb() {
    for (let i = 1; i <= 10; i++) {
        try {
            await pool.query(
                'CREATE TABLE IF NOT EXISTS visits (id serial PRIMARY KEY, visited_at timestamptz DEFAULT now())'
            );
            console.log('Database ready');
            return;
        } catch (err) {
            console.log(`DB not ready (attempt ${i}): ${err.message}`);
            await new Promise((r) => setTimeout(r, 2000));
        }
    }
    process.exit(1);
}

app.get('/', async (req, res) => {
    await pool.query('INSERT INTO visits DEFAULT VALUES');
    const { rows } = await pool.query('SELECT count(*) FROM visits');
    res.json({ message: 'Hello from Compose', visits: Number(rows[0].count) });
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

initDb().then(() => app.listen(PORT, '0.0.0.0', () => console.log(`Listening on ${PORT}`)));