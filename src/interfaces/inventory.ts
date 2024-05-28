import { EStatuses } from './statuses';

export interface IInventory {
  id: number;
  name: string;
  status?: EStatuses;
  pickedAt?: Date;
  returnAt?: Date;
}
