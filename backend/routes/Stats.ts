import express, { Request, Response } from 'express';
import { statsController } from '../controllers';

export const router = express.Router({
  strict: true,
});

router.get('/api/stats', (req: Request, res: Response) => {
  statsController.getAllResults(req, res);
});

router.get('/api/schedule', (req: Request, res: Response) => {
  statsController.getSchedule(req, res);
});

router.get('/api/teams', (req: Request, res: Response) => {
  statsController.getTeams(req, res);
});
