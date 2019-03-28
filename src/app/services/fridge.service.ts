import { Injectable } from '@angular/core';
import { MOCK_FRIDGE } from '../helpers/mock-fridge';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FridgeService {

  constructor(private route: Router) { }

  getFridgesByUser() {
    return MOCK_FRIDGE;
  }

  getFridgeById(id: string) {
    return MOCK_FRIDGE[parseInt(id) - 1];
  }
}
