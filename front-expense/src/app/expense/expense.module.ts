import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpenseRoutingModule } from './expense-routing.module';
import { PipeModule } from '../pipe/pipe.module';
import { ExpenseComponent } from './expense.component';

@NgModule({
  declarations: [
    ExpenseComponent
  ],
  imports: [
    CommonModule,
    ExpenseRoutingModule,
    PipeModule
  ],
  exports: [
    ExpenseComponent
  ]
})
export class ExpenseModule { }
