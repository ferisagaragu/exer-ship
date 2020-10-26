import { Component } from '@angular/core';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent {

  show = false;
  back = false;

  close() {
    this.back = true;
    setTimeout(() => {
      this.show = false;
      this.back = false;
    }, 900)
  }

}
