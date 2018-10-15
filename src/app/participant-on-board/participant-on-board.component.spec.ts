import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantOnBoardComponent } from './participant-on-board.component';

describe('ParticipantOnBoardComponent', () => {
  let component: ParticipantOnBoardComponent;
  let fixture: ComponentFixture<ParticipantOnBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantOnBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantOnBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
