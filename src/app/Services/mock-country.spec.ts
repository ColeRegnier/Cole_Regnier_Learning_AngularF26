import { TestBed } from '@angular/core/testing';
import { MockCountryService } from './mock-country';

describe('MockServiceCountry', () => {
  let service: MockCountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockCountryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
