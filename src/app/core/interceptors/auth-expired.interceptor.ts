import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthExpiredInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap(null, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 && err.url && !err.url.includes('api/account')) {
            // TODO: Falta grabar la url
            // this.stateStorageService.storeUrl(this.router.routerState.snapshot.url);
            // this.loginService.login();
          }
        }
      })
    );
  }
}
