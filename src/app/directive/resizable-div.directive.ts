import {  Directive, ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appResizableDiv]'
})
export class ResizableDivDirective {
  private startX: number;
  private startWidth: number;

  constructor(private elementRef: ElementRef) {}

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.startX = event.pageX;
    this.startWidth = this.elementRef.nativeElement.offsetWidth;
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseMove = (event: MouseEvent) => {
    const newWidth = this.startWidth + (event.pageX - this.startX);
    if (newWidth >= 100) { 
      this.elementRef.nativeElement.style.width = newWidth + 'px';
    }
  }

  onMouseUp = () => {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  }
  
  
}
