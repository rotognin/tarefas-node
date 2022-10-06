/**
 * Esse arquivo irá acessar o banco de dados.
 * É o responsável pelas tarefas
 */

 type tarefaTipo = {
    id: number,
    descricao: string
}

interface ITarefa {
    obterTarefa: (arg0: number) => string;
    adicionarTarefa: (arg0: string) => number;
    listarTarefas: () => tarefaTipo[];
}

const tarefas: tarefaTipo[] = [
    { id: 1, descricao: "Correr pela manhã" },
    { id: 2, descricao: "Passear com o cachorro" },
    { id: 3, descricao: "Treinar bastante Javascript!" },
    { id: 4, descricao: "Trabalhar bastante" }
];

// O "banco" inicialmente será um array
class Tarefa implements ITarefa {
    constructor() {}

    obterTarefa(id_tarefa: number): string{
        if (id_tarefa > 0){
            const tarefa: any = tarefas.find(tarefa => tarefa.id === id_tarefa);
            return (tarefa.descricao == undefined) ? '' : tarefa.descricao;
        } else {
            return '';
        }
    }

    adicionarTarefa(descricao: string): number {
        const tamanho: number = tarefas.length;
        const novaTarefa: tarefaTipo = {
            id: tamanho + 1,
            descricao
        };

        tarefas.push(novaTarefa);
        return tamanho + 1;
    }

    listarTarefas(): tarefaTipo[] {
        return tarefas;
    }
}

export { Tarefa, tarefaTipo }