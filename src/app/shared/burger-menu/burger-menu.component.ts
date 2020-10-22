import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {

  show = false;
  back = false;

  constructor() { }

  ngOnInit(): void {
  }

  close() {
    this.back = true;
    setTimeout(() => {
      this.show = false;
      this.back = false;
    }, 900)
  }
}
