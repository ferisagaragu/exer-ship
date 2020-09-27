import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBarExerciseShadow]'
})
export class BarExerciseShadowDirective {

  @Input('appBarExerciseShadow') color: string;

  constructor(private element: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.shadow(this.color);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.shadow('');
  }

  private shadow(color: string) {
    const img = this.element.nativeElement.children[0];

    if (color) {
      this.element.nativeElement.style.boxShadow = `0 0 8px ${color}`;
      img.style.boxShadow = `0 0 8px ${color}`;
    } else {
      this.element.nativeElement.style.boxShadow = null;
      img.style.boxShadow = null;
    }
  }

}
