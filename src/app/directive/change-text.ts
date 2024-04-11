import { Directive,ElementRef } from "@angular/core";

@Directive({
    selector:'[changeText]'
})

export class ChangeText{
    constructor(ele:ElementRef){
        ele.nativeElement.innerText ="HHHHHHHHHHHHHHH"
    }
}