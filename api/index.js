import express from 'express';
import cors from 'cors';
import estudanteRoutes from './routes/estudantes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/', estudanteRoutes);

app.listen(8800);
