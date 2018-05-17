import { model } from 'mongoose';
import SubCategorySchema from './schemas/sub-category.schema';

const SubCategoryModel = model('Subcategory', SubCategorySchema);

export default SubCategoryModel;
