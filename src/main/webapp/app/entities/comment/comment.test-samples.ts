import dayjs from 'dayjs/esm';

import { IComment, NewComment } from './comment.model';

export const sampleWithRequiredData: IComment = {
  id: 79505,
};

export const sampleWithPartialData: IComment = {
  id: 84120,
  creationTime: dayjs('2023-06-21'),
};

export const sampleWithFullData: IComment = {
  id: 81980,
  content: 'et Innovative',
  creationTime: dayjs('2023-06-21'),
};

export const sampleWithNewData: NewComment = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
