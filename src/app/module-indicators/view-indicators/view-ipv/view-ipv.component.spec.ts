import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIpvComponent } from './view-ipv.component';

describe('ViewIpvComponent', () => {
  let component: ViewIpvComponent;
  let fixture: ComponentFixture<ViewIpvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewIpvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIpvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
