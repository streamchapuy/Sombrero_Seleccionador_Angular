import { TestBed } from '@angular/core/testing';

import { HarrySongService } from './harry-song.service';

describe('HarrySongService', () => {
  let service: HarrySongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarrySongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
