/**
 * Projeto ded sistema em NodeJS: Sistema de tarefas
 * Objetivo: MVC
 */

import express, { Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';



const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send(`
        <html>
        <head><title>Página bacana!</title></head>
        <body>
            <h1>Lista de tarefas</h1>
            <hr>
            <p>Criar uma lista de <i>tarefas</i></p>
        </body>
        </html>
    `);
});

// Rota incorreta:
app.use((req: Request, res: Response) => {
    res.status(404).send("Página não encontrada.");
});

app.listen(3001, () => {
    console.log('Servidor ativo e rodando na porta 3001');
});