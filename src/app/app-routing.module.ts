import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from 'src/share/auth/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'expense', canActivate: [AuthGuardService], loadChildren: () => import('./expense/expense.module').then(m => m.ExpenseModule) },
  { path: 'home', canActivate: [AuthGuardService], loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'graph', canActivate: [AuthGuardService], loadChildren: () => import('./graph/graph.module').then(m => m.GraphModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
