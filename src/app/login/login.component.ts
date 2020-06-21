import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { ValidateUtilService } from 'src/share/common/validate-util.service';

declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public formLogin;
  public isSubmitted;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private validateUtil: ValidateUtilService
    ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(8)]],
      // tslint:disable-next-line: max-line-length
      password: ['', [Validators.required
        // , Validators.minLength(8), Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$')
      ]]
    });
    this.facebookInit();
  }

  public signIn() {
    this.isSubmitted = true;
    if (this.formLogin.valid) {
      this.loginService.login(this.formLogin.value);
    }
  }

  public validateSignIn(controlName, validateKey) {
    if (this.validateUtil.isNotEmpty(this.formLogin.controls[controlName].errors)) {
      return this.formLogin.controls[controlName].errors[validateKey];
    }
    return false;
  }

  public facebookInit() {
    window['fbAsyncInit'] = function() {
      FB.init({
        appId            : '497185937826972',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v6.0'
      });
    };
  }

  public facebookSignIn() {
    FB.login(function(response) {
      // handle the response 
      console.log(response);
    });
  }

  public checkStatusSignInFacebook() {
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        
      }
    });
  }
}
