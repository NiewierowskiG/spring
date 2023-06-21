import dayjs from 'dayjs/esm';

export interface IPost {
  id: number;
  title?: string | null;
  description?: string | null;
  creationTime?: dayjs.Dayjs | null;
  status?: number | null;
}

export type NewPost = Omit<IPost, 'id'> & { id: null };
