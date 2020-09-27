import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarExerciseComponent } from './bar-exercise.component';

describe('BarExerciseComponent', () => {
  let component: BarExerciseComponent;
  let fixture: ComponentFixture<BarExerciseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarExerciseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
