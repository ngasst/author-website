import { model } from 'mongoose';
import CategorySchema from './schemas/category.schema';

const CategoryModel = model('Category', CategorySchema);

export default CategoryModel;
