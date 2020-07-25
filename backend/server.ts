import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import pool from './models/index';
import { standingsRouter } from './routes';

const app = express();
const port = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/standings', standingsRouter);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
} else {
  app.use(express.static(path.join(__dirname, '/client/public')));
  app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
  });
}

// tslint:disable-next-line:no-console
app.listen(port, () => console.log(`Listening on port ${port}`));

// Create standings table if doesn't exits
pool.query(
  `CREATE TABLE IF NOT EXISTS standings (id INT AUTO_INCREMENT PRIMARY KEY, team_name VARCHAR(255), wins INT, losses INT, ties INT DEFAULT 0, week INT, grouping INT, total_points FLOAT(8,2))`,
);
