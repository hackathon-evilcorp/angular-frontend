import { User } from './user';
import { PostIt } from './postIt';

export class Fridge {
   
    constructor(public id: number, 
        public admin: User, 
        public fridgeName: string, 
        public postIts: PostIt[], 
        public users: User[]) {
    }

}