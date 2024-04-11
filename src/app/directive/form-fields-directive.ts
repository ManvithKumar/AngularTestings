import { Directive,ElementRef,HostListener,EventEmitter, Output } from "@angular/core";

@Directive({
    selector:'[form-field]',
})

export class FormFields{

    @Output() isTrue:EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private ele:ElementRef){
    
    }
    @HostListener('mouseover') Run() {
        this.isTrue.emit(true)
    }
    @HostListener('mouseout') Back() {
        this.ele.nativeElement.style.transform = "scale(1)"
        this.isTrue.emit(false)
    }

}   