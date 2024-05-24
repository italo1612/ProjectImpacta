import { addEstudante, getEstudantes, updateEstudante, deleteEstudante } from '../controllers/estudantes.js';
import express from 'express'
const router = express.Router();

router.get('/', getEstudantes);
router.post('/', addEstudante);
router.put('/:id', updateEstudante);
router.delete('/:id', deleteEstudante);

export default router;
