import { User } from './user';
import { PostIt } from './postIt';

export class Fridge {
   
    constructor(public id: number, 
        public admin: string, 
        public fridgeName: string, 
        public postIts: PostIt[], 
        public users: string) {
    }

}