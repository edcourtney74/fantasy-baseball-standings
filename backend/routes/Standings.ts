import express, { Request, Response } from "express";
import { standingsController } from "../controllers";

export const router = express.Router({
  strict: true,
});

// router.post('/', (req: Request, res: Response) => {
//     userController.create(req, res);
// });

router.get("/", (req: Request, res: Response) => {
  standingsController.getAllStandings(req, res);
});

// router.patch('/', (req: Request, res: Response) => {
//     userController.update(req, res);
// });

// router.delete('/', (req: Request, res: Response) => {
//     userController.delete(req, res);
// });
