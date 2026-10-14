import { TestBed } from '@angular/core/testing';
import { MockCountry } from './mock-country';

describe('MockCountry', () => {
  let service: MockCountry;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockCountry);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
