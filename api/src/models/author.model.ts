import { model } from 'mongoose';
import AuthorSchema from './schemas/author.schema';

const AuthorModel = model('Author', AuthorSchema);

export default AuthorModel;
