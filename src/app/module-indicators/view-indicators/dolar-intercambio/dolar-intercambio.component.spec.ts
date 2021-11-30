import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolarIntercambioComponent } from './dolar-intercambio.component';

describe('DolarIntercambioComponent', () => {
  let component: DolarIntercambioComponent;
  let fixture: ComponentFixture<DolarIntercambioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DolarIntercambioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DolarIntercambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
