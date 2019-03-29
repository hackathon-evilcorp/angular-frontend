import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
