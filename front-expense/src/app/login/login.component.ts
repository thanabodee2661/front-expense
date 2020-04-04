import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { ValidateUtilService } from 'src/share/common/validate-util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  public formLogin;
  public statusLogin = false;

  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private validateUtil: ValidateUtilService
    ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(8)]],
      // tslint:disable-next-line: max-line-length
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$')]]
      // username: ['', Validators.required],
      // password: ['', Validators.required]
    });
  }

  public signIn() {
    console.log(this.formLogin.controls.username.errors)
    if (this.formLogin.valid) {
      this.loginService.login(this.formLogin.value);
      this.statusLogin = true;
    }
  }

  public validateUsername(controlName, validateKey) {
    if (this.validateUtil.isNotEmpty(this.formLogin.controls[controlName].errors)) {
      if (validateKey === 'required') {
        return this.formLogin.controls[controlName].errors[validateKey];
      }
    }
  }
}
