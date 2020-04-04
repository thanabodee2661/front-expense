import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatPipe } from './pipe/format/format.pipe';
import { CommonService } from './common/common.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { AuthService } from './auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ValidateUtilService } from './common/validate-util.service';

@NgModule({
  declarations: [
    FormatPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CommonService,
    AuthGuardService,
    AuthService,
    ValidateUtilService
  ]
})
export class ShareModule { }
