import { ERoles } from './roles';

export interface IUser {
  id: number;
  email: string;
  entered_at?: Date;
  left_at?: Date;
  password: string;
  status?: string;
  username: string;
  first_name: string;
  last_name: string;
  roles?: ERoles[];
}
