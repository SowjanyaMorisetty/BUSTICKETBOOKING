import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatescheduleComponent } from './updateschedule.component';

describe('UpdatescheduleComponent', () => {
  let component: UpdatescheduleComponent;
  let fixture: ComponentFixture<UpdatescheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdatescheduleComponent]
    });
    fixture = TestBed.createComponent(UpdatescheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
