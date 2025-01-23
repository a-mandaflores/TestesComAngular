import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appGrade]'
})
export class GradeDirective {

  @Input() appGrade = 0

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(){
    if(this.appGrade >= 90){
      this.el.nativeElement.style.color = 'green';
    }else if(this.appGrade < 90 && this.appGrade >= 35){
      this.el.nativeElement.style.color = 'blue'
    }else {
      this.el.nativeElement.style.color = 'red'
    }
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.el.nativeElement.style.color = 'black'
  }
}
