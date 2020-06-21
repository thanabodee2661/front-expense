import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { finalize, tap } from 'rxjs/operators';
import { LoadingService } from '../loading/loading.service';

@Injectable()
export class Interceptors implements HttpInterceptor {

    constructor(private loadingService: LoadingService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        this.loadingService.show();
        return next.handle(req).pipe(
            tap(
                (event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        this.loadingService.hide();
                    }
                },
                (err: any) => {

                }
            ),
            finalize(() => {
                this.loadingService.hide();
            })
        );
    }
}
