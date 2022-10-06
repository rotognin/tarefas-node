/**
 * Ponto de entrada no sistema
 */

import { Router, Request, Response } from 'express';

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.render('home');
});

export default router;