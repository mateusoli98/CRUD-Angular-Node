import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AppInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let request: HttpRequest<any> = req;
    request = req.clone({
      headers: req.headers.set('Content-Type', 'application/json'),
    });
    return next.handle(request).pipe();
  }
}
