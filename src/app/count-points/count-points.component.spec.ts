import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountPointsComponent } from './count-points.component';

describe('CountPointsComponent', () => {
  let component: CountPointsComponent;
  let fixture: ComponentFixture<CountPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
