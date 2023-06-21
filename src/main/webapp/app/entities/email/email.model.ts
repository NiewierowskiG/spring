import dayjs from 'dayjs/esm';

export interface IEmail {
  id: number;
  title?: string | null;
  content?: string | null;
  sendingDate?: dayjs.Dayjs | null;
}

export type NewEmail = Omit<IEmail, 'id'> & { id: null };
