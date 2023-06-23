import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShedulehomepageComponent } from './shedulehomepage.component';

describe('ShedulehomepageComponent', () => {
  let component: ShedulehomepageComponent;
  let fixture: ComponentFixture<ShedulehomepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShedulehomepageComponent]
    });
    fixture = TestBed.createComponent(ShedulehomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
