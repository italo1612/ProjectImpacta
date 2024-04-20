import { addEstudante, getEstudantes, updateEstudante } from '../controllers/estudantes.js';
import express from 'express'
const router = express.Router();

router.get('/', getEstudantes);
router.post('/', addEstudante);
router.put('/:id', updateEstudante);

export default router;
