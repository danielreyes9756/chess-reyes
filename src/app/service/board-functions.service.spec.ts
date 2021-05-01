import { TestBed } from '@angular/core/testing';

import { BoardFunctionsService } from './board-functions.service';

describe('BoardFunctionsService', () => {
  let service: BoardFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoardFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
