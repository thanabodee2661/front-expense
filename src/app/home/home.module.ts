import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ExpenseComponent } from '../expense/expense.component';
import { GraphComponent } from '../graph/graph.component';

@NgModule({
  declarations: [
    HomeComponent,
    ExpenseComponent,
    GraphComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
