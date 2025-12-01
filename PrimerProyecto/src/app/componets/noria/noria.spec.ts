import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Noria } from './noria';

describe('Noria', () => {
  let component: Noria;
  let fixture: ComponentFixture<Noria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Noria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Noria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
