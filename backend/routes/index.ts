import express, { Request, Response } from 'express';
import { statsController } from '../controllers';

const router = express.Router();

// Answer API requests.
router.get('/api', function (req, res) {
  res.set('Content-Type', 'application/json');
  res.send('{"message":"You have found the api"}');
});

router.get('/api/stats', statsController.getAllResults);
router.get('/api/schedule', statsController.getSchedule);

export default router;
