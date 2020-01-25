import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html'
})
export class ExpenseComponent implements OnInit {

  @Input('txtHeader') txtHeader;

  constructor() { }

  ngOnInit() {
  }

}
