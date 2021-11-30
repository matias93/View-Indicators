import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImacecComponent } from './imacec.component';

describe('ImacecComponent', () => {
  let component: ImacecComponent;
  let fixture: ComponentFixture<ImacecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImacecComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImacecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
