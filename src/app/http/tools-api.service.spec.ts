import { TestBed } from '@angular/core/testing';

import { ToolsApiService } from './tools-api.service';

describe('ToolsApiService', () => {
  let service: ToolsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
