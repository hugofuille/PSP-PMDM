import { TestBed } from '@angular/core/testing';

import { ThemeChange } from './theme-change';

describe('ThemeChange', () => {
  let service: ThemeChange;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeChange);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
