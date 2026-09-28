const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const GREETING = process.env.GREETING || 'Hello from Docker';

app.get('/', (req, res) => res.json({ message: GREETING }));
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, '0.0.0.0', () => console.log(`Listening on port ${PORT}`));

