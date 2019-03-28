import { User } from './user';
import { PostIt } from './postIt';

export interface Fridge {
    id: number;
    admin: User;
    fridgeName: string;
    postIts: PostIt[];
    users: User[];
}