import { TestBed } from '@angular/core/testing';

import { WeatherItemsService } from './weather-items.service';

describe('WeatherItemsService', () => {
  let service: WeatherItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
