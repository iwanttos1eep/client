import { ETrainings } from '../enums/training';

export interface ITraining {
  id: number;
  date: Date;
  type: ETrainings;
  name: string;
}
