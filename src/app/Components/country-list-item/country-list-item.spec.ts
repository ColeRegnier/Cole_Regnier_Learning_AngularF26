import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CountryListItem } from './country-list-item';

describe('CountryListItem', () => {
  let component: CountryListItem;
  let fixture: ComponentFixture<CountryListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(CountryListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
