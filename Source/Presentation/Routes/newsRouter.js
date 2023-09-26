import { Router } from 'express';
import auth from '../Middlewares/auth.js';
import { paginate, deleteNew,  create, update, getForUser, getOne } from '../Controllers/newsController.js';
import authorization from '../Middlewares/authorization.js';

const newsRouter = Router();

newsRouter.get('/', paginate);

newsRouter.get('/title', getForUser);

newsRouter.get('/:id', getOne);

newsRouter.post('/', create);

newsRouter.put('/:id',  update);

newsRouter.delete('/:id',  deleteNew);


export default newsRouter;