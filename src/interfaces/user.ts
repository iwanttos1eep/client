import { ERoles } from './roles';

export interface IUser {
  id: number;
  email: string;
  enteredAt?: Date;
  leftAt?: Date;
  password: string;
  status?: string;
  username: string;
  first_name: string;
  last_name: string;
  roles?: {
    id: number;
    name: ERoles;
  }[];
}
