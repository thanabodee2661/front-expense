import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, tap } from 'rxjs/operators';
import { LoadingService } from '../loading/loading.service';
import { AuthService } from '../auth/auth.service';
import { AlertService } from './alert.service';

@Injectable()
export class Interceptors implements HttpInterceptor {

    private AUTH_HEADER = 'Authorization';

    constructor(
        private loadingService: LoadingService,
        private authService: AuthService,
        private alertService: AlertService
    ) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        req = this.addAuthenticationToken(req);
        this.loadingService.show();
        return next.handle(req).pipe(
            tap(
                (event: HttpEvent<any>) => { },
                (error: HttpErrorResponse) => {
                    console.log(error);
                    if (error.status === 500 || error.status === 0) {
                        this.alertService.alertErrorStatus500();
                    } else if (error.status === 401) {
                        this.alertService.alertErrorStatus401();
                    }
                }
            ),
            finalize(() => {
                this.loadingService.hide();
            })
        );
    }

    private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
        if (this.authService.getLoggetedIn) {
            const token = this.authService.getToken();
            return request.clone({
                headers: request.headers.set(this.AUTH_HEADER, 'Bearer ' + token)
            });
        } else {
            return request;
        }
    }
}
