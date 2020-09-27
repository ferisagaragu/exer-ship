import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.scss']
})
export class CardUserComponent implements OnInit {

  @Input() color: string;
  @Input() percentage: number;
  @Input() userName: string;
  @Input() src: string;

  toDay: number;

  constructor() {
    this.toDay = new Date().getDay();
  }

  ngOnInit(): void { }

}
