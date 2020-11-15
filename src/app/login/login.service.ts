import { Injectable } from '@angular/core';
import { CommonService } from 'src/share/common/common.service';
import { AuthService } from 'src/share/auth/auth.service';
import { Router } from '@angular/router';
import { ValidateUtilService } from 'src/share/common/validate-util.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private logInPath = '/auth/login';

  constructor(
    private commonService: CommonService,
    ) { }

  public login(param) {
    return this.commonService.post(this.logInPath, param);
  }

}
