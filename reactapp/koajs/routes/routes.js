import Router from 'koa-router';
import { inputMiddleware } from '../middleware/todoInputMiddleware.js';
import todoHandlers from '../handlers/products/todoHandlers.js';

const router = new Router({
  prefix: '/api'
});

router.get('/todos', todoHandlers.getManyTodos);
router.get('/todos/:id', todoHandlers.getOneToDo);
router.post('/todos', inputMiddleware, todoHandlers.addToDo);
router.put('/todos/:id', todoHandlers.updateToDo);
router.delete('/todos/:id', todoHandlers.deleteToDo);
router.put('/complete_many', todoHandlers.completeManyTodo);
router.post('/delete_many', todoHandlers.deleteManyTodo);

export { router };
