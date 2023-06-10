import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, Observable, take, tap } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
          if (!user)
            return next.handle(req);
          const modReq = req.clone({ params: new HttpParams().set('auth', user.token ?? '') });
          return next.handle(modReq);
        })
      );
    }

  constructor(private authService:AuthService) { }
}
