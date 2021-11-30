import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUfComponent } from './view-uf.component';

describe('ViewUfComponent', () => {
  let component: ViewUfComponent;
  let fixture: ComponentFixture<ViewUfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
