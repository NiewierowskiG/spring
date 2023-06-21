import dayjs from 'dayjs/esm';

import { IEmail, NewEmail } from './email.model';

export const sampleWithRequiredData: IEmail = {
  id: 60175,
};

export const sampleWithPartialData: IEmail = {
  id: 64059,
  title: 'Metrics Coupe',
};

export const sampleWithFullData: IEmail = {
  id: 26724,
  title: 'Generic',
  content: 'tambour shabby teal',
  sendingDate: dayjs('2023-06-21'),
};

export const sampleWithNewData: NewEmail = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
