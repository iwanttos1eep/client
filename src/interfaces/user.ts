import { ERoles } from './roles';

export interface IUser {
  id: number;
  email: string;
  enteredAt?: Date;
  leftAt?: Date;
  password: string;
  status?: string;
  username: string;
  firstName: string;
  lastName: string;
  roles?: {
    id: number;
    name: ERoles;
  }[];
}
