import { User } from './user';
import { Fridge } from './fridge';

export class PostIt {

    constructor(public id: number,
        public creator: User,
        public type: string,
        public body: string,
        public fridge: Fridge) {
    }
    
}