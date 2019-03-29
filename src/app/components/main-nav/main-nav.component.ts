import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FridgeService } from 'src/app/services/fridge.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  fridges: any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private fridgeService: FridgeService) {
  }

  getFridges(): Observable<Object> {
    return this.fridgeService.getFridgesByUser();
  }

  ngOnInit() {
    this.getFridges().subscribe(data => this.fridges = data);
  }

}
