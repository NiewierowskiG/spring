import dayjs from 'dayjs/esm';

import { IPost, NewPost } from './post.model';

export const sampleWithRequiredData: IPost = {
  id: 38355,
};

export const sampleWithPartialData: IPost = {
  id: 43564,
  title: 'West Southwest Eritrea',
  creationTime: dayjs('2023-06-21'),
};

export const sampleWithFullData: IPost = {
  id: 9306,
  title: 'atop virtual',
  description: 'Southwest Music evolve',
  creationTime: dayjs('2023-06-21'),
  status: 41726,
};

export const sampleWithNewData: NewPost = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
