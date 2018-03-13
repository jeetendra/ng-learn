import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AHttpInterceptors implements HttpInterceptor {
    intercept(req:HttpRequest<any>, next:HttpHandler): Observable<HttpEvent<any>> {
        const modified = req.clone({setHeaders:{'customHeader1':"1"}});
        return next.handle(modified);
    }
}