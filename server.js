import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Serve frontend build
app.use(express.static(path.join(__dirname, 'dist')));

// Enable CORS
app.use(cors());

// API route to fetch CNB daily foreign exchange rates
app.get('/api/rates/daily', async (req, res) => {
  try {
    const response = await fetch(
      'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt'
    );
    const text = await response.text();
    res.send(text);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching CNB data');
  }
});

// SPA fallback
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  } else {
    next();
  }
});


app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}`);
});
