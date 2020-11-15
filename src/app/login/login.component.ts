import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { LoginService } from './login.service';
import { ValidateUtilService } from 'src/share/common/validate-util.service';
import { AuthService } from 'src/share/auth/auth.service';
import { Router } from '@angular/router';

declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public formLogin;
  public isSubmitted = false;
  public isValid = true;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private validateUtil: ValidateUtilService,
    private authService: AuthService,
    private router: Router
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

  get formLoginControls() {
    return this.formLogin.controls;
  }

  public signIn() {
    this.isSubmitted = true;
    if (this.formLogin.valid) {
      this.loginService.login(this.formLogin.value).subscribe((result) => {
        if (this.validateUtil.isNotEmpty(result.token)) {
          this.authService.setLoggetedIn(true, result.token);
          // tslint:disable-next-line: no-unused-expression
          this.router.navigateByUrl('home');
        } else {
          this.isValid = false;
        }
      });
    }
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
