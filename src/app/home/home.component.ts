import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  componentShow = '';

  constructor(private router: Router) { }

  ngOnInit() {
    this.setData();
  }

  setData() {
    this.componentShow = 'EXPENSE';
  }

  setComponent(component) {
    this.componentShow = component;
  }

  onClickChangePage(page: string) {
    this.router.navigateByUrl('home/' + page);
  }

}
