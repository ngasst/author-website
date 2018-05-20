import { Document } from 'mongoose';
export enum CommentOrigin {
  WEBSITE = 'website',
  FACEBOOK = 'facebook',
  TWITTER = 'twitter',
}

export interface IAuthor extends Document {
  name?: IAuthorName;
  social?: IAuthorSocial;
  photos?: IImageLocation;
  created?: string | Date;
  updated?: string | Date;
}

export interface ICategory extends Document {
  labels?: ILanguageLabels;
  color?: string;
  created?: string | Date;
  updated?: string | Date;
}

export interface ISubCategory extends Document {
  labels?: ILanguageLabels;
  parent?: ICategory;
  created?: string | Date;
  updated?: string | Date;
}

export interface IPost extends Partial<Document> {
  title?: string;
  author?: IAuthor;
  location?: string;
  image?: IImageLocation;
  summary?: string;
  views?: number;
  shares?: ISocialSharesCount;
  slug?: string;
  category?: ICategory;
  subCategories?: ISubCategory[];
  comments?: IComment[];
  tags?: ITag[];
  created?: string | Date;
  updated?: string | Date;
  content?: string;
}

export interface ISocialSharesCount {
  facebook?: number;
  twitter?: number;
}

export interface IComment extends Document {
  author?: string;
  origin?: CommentOrigin;
  email?: string;
  body?: string;
  replies?: IComment[];
  subject?: string;
  city?: string;
  country?: string;
  moderated?: boolean;
  created?: string | Date;
  updated?: string | Date;
}

export interface ITag extends Document {
  label: string;
  usage?: number;
  created?: string | Date;
  updated?: string | Date;
}

export interface IAuthorName {
  last: string;
  first: string;
  display?: string;
}

export interface IAuthorSocial {
  twitter?: string;
  facebook?: string;
  website?: string;
}

export interface IImageLocation {
  thumb?: string;
  large?: string;
  credit?: string;
}

export interface ILanguageLabels {
  english?: string;
  french?: string;
}
