import { Injectable } from "@angular/core";
import { HttpRequest,HttpInterceptor,HttpEvent,HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn:"root"
})
export class Headers implements HttpInterceptor{

    constructor(){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        console.log(req);
        const auth = "1000";
        const modifiedRequest = req.clone({
            setHeaders:{
                auth
            }
        })
        return next.handle(modifiedRequest)
    }

}