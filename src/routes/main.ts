/**
 * Ponto de entrada no sistema
 */

import { Router, Request, Response } from 'express';
import css from '../defs/arquivos';
import local from '../defs/enderecos';

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.render('home', { css, local });
});

router.get("/tarefas", (req: Request, res: Response) => {
    // Buscar as tarefas
    const tarefas: Object[] = [
        { tarefa: "Correr pela manhã", id: 1 },
        { tarefa: "Passear com o cachorro", id: 2 },
        { tarefa: "Treinar bastante Javascript!", id: 3 }
    ];
    res.render('tarefas', { css, tarefas });
});

export default router;