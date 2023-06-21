import { ICategory, NewCategory } from './category.model';

export const sampleWithRequiredData: ICategory = {
  id: 1142,
};

export const sampleWithPartialData: ICategory = {
  id: 93007,
  categoryName: 'aboard payment',
};

export const sampleWithFullData: ICategory = {
  id: 46525,
  categoryName: 'Chicken Corporate Cyprus',
};

export const sampleWithNewData: NewCategory = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
