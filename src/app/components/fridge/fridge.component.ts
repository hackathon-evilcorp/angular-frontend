import { Component, OnInit, OnChanges } from '@angular/core';
import { FridgeService } from 'src/app/services/fridge.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent implements OnInit {
  apiUrl: string;
  fridge: any;

  constructor(private fridgeService: FridgeService, private route: Router) {
  }
  
  loadCurrentFridge() {
    var url = this.route.url;
    // return this.fridgeService.getFridgeById((url.substring(url.lastIndexOf('/') + 1)));
    return this.fridgeService.getFridgeById(url.substring(url.lastIndexOf('/') + 1));
  }
  
  ngOnInit() {
    this.loadCurrentFridge().subscribe(data => this.fridge = data);
  }
}
