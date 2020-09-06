import express, { Request, Response } from 'express';
import { statsController } from '../controllers';

const router = express.Router();

// Answer API requests.
router.get('/api/stats', statsController.getAllResults);
router.get('/api/schedule', statsController.getSchedule);
router.get('/api/teams', statsController.getTeams);

export default router;
