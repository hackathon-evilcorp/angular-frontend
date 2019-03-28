import { User } from './user';
import { Fridge } from './fridge';

export interface PostIt {
    id: number;
    creator: User;
    type: string;
    body: string;
    fridge: Fridge;
}