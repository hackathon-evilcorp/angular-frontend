import { PostIt } from './postIt';
import { Fridge } from './fridge';

export interface User {
    id: number;
    name: string;
    eMail: string;
    postIt: PostIt[];
    fridges: Fridge[];
    token: string;
}