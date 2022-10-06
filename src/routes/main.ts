/**
 * Ponto de entrada no sistema
 */

import { Router, Request, Response } from 'express';
import css from '../defs/arquivos';
import local from '../defs/enderecos';
import { Tarefa, tarefaTipo } from '../models/tarefas';

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.render('home', { css, local });
});

router.get("/tarefas", (req: Request, res: Response) => {
    // Buscar as tarefas
    const tarefa: Tarefa = new Tarefa();
    const tarefas: tarefaTipo[] = tarefa.listarTarefas();

    res.render('tarefas', { css, tarefas });
});

router.post("/tarefas", (req: Request, res: Response) => {
    const { descricao }: { descricao: string } = req.body;

    if (descricao == undefined){
        return res.json({
            mensagem: 'Descrição inválida'
        });
    }

    const tarefa: Tarefa = new Tarefa();
    const id: number = tarefa.adicionarTarefa(descricao);

    const tarefas: tarefaTipo[] = tarefa.listarTarefas();

    res.render('tarefas', { css, tarefas });
} );

export default router;