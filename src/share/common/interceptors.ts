import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { LoadingService } from '../loading/loading.service';

@Injectable()
export class Interceptors implements HttpInterceptor {

    constructor(private loadingService: LoadingService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        this.loadingService.show();
        return next.handle(req).pipe(
            finalize(() => {
                this.loadingService.hide();
            })
        );
    }
}
