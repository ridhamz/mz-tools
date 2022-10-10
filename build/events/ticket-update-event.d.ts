import { Subjects } from './subjects';
export interface TicketCreatedEvent {
    subject: Subjects.TicketUpdate;
    data: {
        id: string;
        title: string;
        price: number;
        userId: string;
    };
}
