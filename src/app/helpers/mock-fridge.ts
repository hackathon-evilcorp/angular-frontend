import { Fridge } from '../models/fridge';
import { MOCK_POSTIT } from './mock-postit';

export const MOCK_FRIDGE: Fridge[] = [
    new Fridge(1, null, "testFridge", MOCK_POSTIT, null),
    new Fridge(2, null, "cucleeFridge", MOCK_POSTIT, null)
];
