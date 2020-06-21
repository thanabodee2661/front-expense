import { Injectable } from '@angular/core';
import { NgBlockUI, BlockUI } from 'ng-block-ui';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  constructor(private ngxService: NgxUiLoaderService) { }

  show() {
    this.ngxService.start();
  }

  hide() {
    this.ngxService.stop();
  }
}
