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
    private authService: AuthService,
    private router: Router,
    private validateUtil: ValidateUtilService
    ) { }

  public login(param) {
    this.commonService.post(this.logInPath, param).subscribe((result) => {
      if (this.validateUtil.isNotEmpty(result.token)) {
        this.authService.setLoggetedIn(true, result.token);
        // tslint:disable-next-line: no-unused-expression
        this.router.navigateByUrl('home');
      }
    });
  }

}
