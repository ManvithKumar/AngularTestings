import { Injectable, Input } from "@angular/core";
import { Observable,of } from "rxjs";

@Injectable({
    providedIn:"root"
})

export class PaginationService 
{
    fetchData(page: number, pageSize: number,data:any[]): Observable<string[]> {
        const startIndex = page * pageSize;
        const endIndex = startIndex + pageSize;
        const pageData = data.slice(startIndex, endIndex);
        return of(pageData);
      }
}