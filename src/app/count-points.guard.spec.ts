import { TestBed, async, inject } from '@angular/core/testing';

import { CountPointsGuard } from './count-points.guard';

describe('CountPointsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountPointsGuard]
    });
  });

  it('should ...', inject([CountPointsGuard], (guard: CountPointsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
