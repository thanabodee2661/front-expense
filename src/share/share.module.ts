import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatPipe } from './pipe/format/format.pipe';
import { CommonService } from './common/common.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ValidateUtilService } from './common/validate-util.service';
import { LoadingComponent } from './loading/loading.component';
import { LoginService } from 'src/app/login/login.service';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { Interceptors } from './common/interceptors.service';

@NgModule({
  declarations: [
    FormatPipe,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxUiLoaderModule
  ],
  providers: [
    CommonService,
    AuthGuardService,
    AuthService,
    ValidateUtilService,
    LoginService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptors,
      multi: true
    }, 
  ],
  exports: [
    LoadingComponent
  ]
})
export class ShareModule { }
