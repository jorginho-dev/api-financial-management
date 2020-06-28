import { getCustomRepository } from 'typeorm';
import CategoriesRepository from '../repositories/CategoriesRepository';

import AppError from '../errors/AppError';
import Category from '../models/Category';

interface Request {
  title: string;
}

class CreateCategoryService {
  public async execute({ title }: Request): Promise<Category> {
    const categoriesRepository = getCustomRepository(CategoriesRepository);

    const categoryExist = await categoriesRepository.findOne({
      where: { title },
    });

    if (categoryExist) {
      throw new AppError('This Category already exist');
    }

    const category = categoriesRepository.create({ title });

    await categoriesRepository.save(category);

    return category;
  }
}

export default CreateCategoryService;
