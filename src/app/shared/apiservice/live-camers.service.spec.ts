import { TestBed } from '@angular/core/testing';

import { LiveCamersService } from './live-camers.service';

describe('LiveCamersService', () => {
  let service: LiveCamersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiveCamersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
