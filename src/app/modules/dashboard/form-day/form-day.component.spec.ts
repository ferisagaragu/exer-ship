import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDayComponent } from './form-day.component';

describe('FormDayComponent', () => {
  let component: FormDayComponent;
  let fixture: ComponentFixture<FormDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
