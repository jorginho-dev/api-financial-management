import { Router } from 'express';

import CreateCategoryService from '../services/CreateCategoryService';

const categoriesRouter = Router();

categoriesRouter.post('/', async (request, response) => {
  const { title } = request.body;
  const categoryService = new CreateCategoryService();

  const category = await categoryService.execute({ title });

  return response.json(category);
});

export default categoriesRouter;
