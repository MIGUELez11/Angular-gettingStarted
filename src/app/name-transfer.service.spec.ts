import { TestBed } from '@angular/core/testing';

import { NameTransferService } from './name-transfer.service';

describe('NameTransferService', () => {
  let service: NameTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
