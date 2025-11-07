import { ComponentFixture, TestBed } from '@angular/core/testing';

import { lista } from './lista';

describe('Lista', () => {
  let component: lista;
  let fixture: ComponentFixture<lista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [lista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(lista);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
