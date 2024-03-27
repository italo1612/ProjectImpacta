import { addEstudante, getEstudantes } from '../controllers/estudantes.js';
import express from 'express'
const router = express.Router();

router.get('/', getEstudantes);
router.post('/', addEstudante);

export default router;
