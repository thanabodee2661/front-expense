import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  componentShow = '';

  constructor() { }

  ngOnInit() {
    this.setData();
  }

  setData() {
    this.componentShow = 'EXPENSE';
  }

  setComponent(component) {
    this.componentShow = component;
  }

}
