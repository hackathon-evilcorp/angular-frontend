import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Fridge } from 'src/app/models/fridge';
import { MOCK_FRIDGE } from 'src/app/helpers/mock-fridge';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  private fridges: Fridge[];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.fridges = MOCK_FRIDGE;
  }

}
