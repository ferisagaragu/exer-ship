import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegistExerciseComponent } from './form-regist-exercise.component';

describe('FormRegistExerciseComponent', () => {
  let component: FormRegistExerciseComponent;
  let fixture: ComponentFixture<FormRegistExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRegistExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRegistExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
