import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GeneralInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method == 'PUT' || request.method == 'POST') {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json')
      });
    }

    return next.handle(request);
  }
}


// request = request.clone({
//   headers: new HttpHeaders()
//   .set('Content-Type', 'application/json')
//   .set('Access-Control-Allow-Origin', '*')
//   .set('Access-Control-Allow-Methods', '*')
// });


// 'Access-Control-Allow-Origin', '*'
// 'Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT'