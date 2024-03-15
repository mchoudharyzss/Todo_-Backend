import { Router} from 'express';
const router =Router();
import * as taskController from '../controllers/Task.Controller.js';

router.get('/AllTask', taskController.getAllTasks);
router.post('/CreateTask', taskController.createTask);
router.patch('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

export default router;
