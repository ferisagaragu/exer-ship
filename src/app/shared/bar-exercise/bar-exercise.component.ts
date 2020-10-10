import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar-exercise',
  templateUrl: './bar-exercise.component.html',
  styleUrls: ['./bar-exercise.component.scss']
})
export class BarExerciseComponent {

  @Input() color: string;
  @Input() src: string;
  @Input() percentage: string;
  @Input() name: string;

}
