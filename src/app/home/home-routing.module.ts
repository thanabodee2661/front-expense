import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', redirectTo: 'expense', pathMatch: 'full' },
      { path: 'expense', loadChildren: () => import('../expense/expense.module').then(m => m.ExpenseModule), data: {page: 'EXPENSE'} },
      { path: 'income', loadChildren: () => import('../expense/expense.module').then(m => m.ExpenseModule), data: {page: 'INCOME'} },
      { path: 'graph', loadChildren: () => import('../graph/graph.module').then(m => m.GraphModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
