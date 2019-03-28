import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostitComponent } from './create-postit.component';

describe('CreatePostitComponent', () => {
  let component: CreatePostitComponent;
  let fixture: ComponentFixture<CreatePostitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePostitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
