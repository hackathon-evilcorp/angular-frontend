import { Injectable } from '@angular/core';
import { MOCK_FRIDGE } from '../helpers/mock-fridge';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Fridge } from '../models/fridge';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FridgeService {
  apiUrl: string = 'https://localhost:44324/api/fridge';

  constructor(private route: Router, private http: HttpClient) { }

  getFridgesByUser() {
    return this.http.get('https://localhost:44324/api/fridge');
  }

  getFridgeById(id: string) {
    return this.http.get('https://localhost:44324/api/fridge/' + id)
  }
}
