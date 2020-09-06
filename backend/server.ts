import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import pool from './models/index';
import router from './routes/index';

const app = express();
const port = process.env.PORT || 3001;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

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

// Create standings, schedule table if doesn't exits
pool.query(
  `CREATE TABLE IF NOT EXISTS standings (id INT AUTO_INCREMENT PRIMARY KEY, team_name VARCHAR(255), wins INT, losses INT, ties INT DEFAULT 0, week INT, grouping INT, total_points FLOAT(8,2));`,
);
pool.query(
  `CREATE TABLE IF NOT EXISTS schedule (id INT AUTO_INCREMENT PRIMARY KEY, team_name VARCHAR(255), week INT, grouping INT, start_date DATE, end_date DATE);`,
);
pool.query(
  `CREATE TABLE IF NOT EXISTS teams (id INT AUTO_INCREMENT PRIMARY KEY, team_name VARCHAR(255), nickname VARCHAR(20));`,
);
