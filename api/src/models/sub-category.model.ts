import { model } from 'mongoose';
import SubCategorySchema from './schemas/sub-category.schema';

const SubCategoryModel = model('SubCategory', SubCategorySchema);

export default SubCategoryModel;
