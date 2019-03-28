import { Component, OnInit } from '@angular/core';
import { Fridge } from 'src/app/models/fridge';
import { MOCK_FRIDGE } from 'src/app/helpers/mock-fridge';
import { FridgeService } from 'src/app/services/fridge.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent implements OnInit {
  asgards = [1,2,3,4,5,6,7];

  constructor(private fridgeService: FridgeService, private route: Router) {
  }

  ngOnInit() {
    this.loadCurrentFridge();
    console.log(this.loadCurrentFridge().toString);
  }

  loadCurrentFridge() {
    var url = this.route.url;
    return this.fridgeService.getFridgeById((url.substring(url.lastIndexOf('/') + 1)));
  }


}
