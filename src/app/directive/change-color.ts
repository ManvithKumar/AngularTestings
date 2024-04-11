import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector: '[change-color]'
})
export class ChangeColorDirective {

    @Input() size:number=0
    constructor(private ele: ElementRef) {}

    @HostListener('mouseover') changeColor() {
        this.ele.nativeElement.style.color="red";
    }
}
