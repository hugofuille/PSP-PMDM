import { ComponentFixture, TestBed } from '@angular/core/testing';
import { clicker } from './clicker';

describe('Clicker', () => {
  let component: clicker;
  let fixture: ComponentFixture<clicker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [clicker]
    })
    .compileComponents();

    fixture = TestBed.createComponent(clicker);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
