/**
 * Projeto ded sistema em NodeJS: Sistema de tarefas
 * Objetivo: MVC
 */

import express, { Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';
import rotas from './routes/main';

const app = express();

app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));
app.engine('mustache', mustache());

const basePath: string = path.join(__dirname, '../public');
app.use(express.static(basePath));

app.use(rotas);

// Rota incorreta:
app.use((req: Request, res: Response) => {
    res.status(404).send("Página não encontrada.");
});

app.listen(3001, () => {
    console.log('Servidor ativo e rodando na porta 3001');
});