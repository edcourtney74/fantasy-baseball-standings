import pool from '../models';
import { Request, Response } from 'express';

export class StatsController {
  async getAllResults(req: Request, res: Response): Promise<void> {
    const results = await pool.query('SELECT * FROM standings;');
    res.send(results);
  }

  async getSchedule(req: Request, res: Response): Promise<void> {
    const results = await pool.query('SELECT * FROM schedule ORDER BY week ASC;');
    res.send(results);
  }
}
