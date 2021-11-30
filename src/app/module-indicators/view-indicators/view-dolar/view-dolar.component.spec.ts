import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDolarComponent } from './view-dolar.component';

describe('ViewDolarComponent', () => {
  let component: ViewDolarComponent;
  let fixture: ComponentFixture<ViewDolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewDolarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
