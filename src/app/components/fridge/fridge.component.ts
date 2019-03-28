import { Component, OnInit } from '@angular/core';
import { Fridge } from 'src/app/models/fridge';
import { MOCK_FRIDGE } from 'src/app/helpers/mock-fridge';

@Component({
  selector: 'app-fridge',
  templateUrl: './fridge.component.html',
  styleUrls: ['./fridge.component.css']
})
export class FridgeComponent implements OnInit {

  fridges: Fridge[];

  constructor() {
    this.fridges = MOCK_FRIDGE
  }

  ngOnInit() {
  }


}
