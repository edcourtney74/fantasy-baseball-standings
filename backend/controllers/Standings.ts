import pool from "../models";
import { Request, Response } from "express";

export class StandingsController {
  async getAllStandings(req: Request, res: Response): Promise<void> {
    const results = await pool.query("SELECT * FROM standings;");
    res.send(results);
  }
}
