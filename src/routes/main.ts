/**
 * Ponto de entrada no sistema
 */

import { Router, Request, Response } from 'express';
import css from '../defs/arquivos';

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.render('home', { css });
});

export default router;