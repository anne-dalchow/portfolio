import { TestBed } from '@angular/core/testing';

import { ProjectlistdataService } from './projectlistdata.service';

describe('ProjectlistdataService', () => {
  let service: ProjectlistdataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectlistdataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
