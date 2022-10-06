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
    const mensagem: string = '';

    res.render('tarefas', { css, tarefas, mensagem });
});

router.get("/tarefas/:tarefaId", (req: Request, res: Response) => {
    const tarefaId: string = req.params.tarefaId;
    const id: number = parseInt(tarefaId);
    let mensagem: string = '';

    if (isNaN(id)){
        mensagem = 'ERRO: Número incorreto!';
    } else {
        const tarefa: Tarefa = new Tarefa();
        const descricao: string = tarefa.obterTarefa(id);
        mensagem = (descricao == '' ) ? '-> Tarefa inexistente!' : descricao ;
    }

    res.render('tarefa', { mensagem });

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
    const mensagem: string = '';

    res.render('tarefas', { css, tarefas, mensagem });
} );

export default router;