import { Subjects } from './subjects';

export interface ExpirationComplete {
  subject: Subjects.ExpirationComplete;
  data: {
    orderId: string;
  };
}
