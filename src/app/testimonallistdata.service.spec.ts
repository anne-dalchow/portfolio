import { TestBed } from '@angular/core/testing';

import { TestimonallistdataService } from './testimonallistdata.service';

describe('TestimonallistdataService', () => {
  let service: TestimonallistdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestimonallistdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
