import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'trimData'
})

export class TrimPipe implements PipeTransform{

    transform(value: string,limit:number) 
    {
        if(value.length <= limit)
        {
            return value
        }
        return value.slice(0,limit) + '....';
        
    }

}