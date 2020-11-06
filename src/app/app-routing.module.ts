import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DASHBOARD_ROUTES_ADMIN, DASHBOARD_ROUTES_COORD } from './components/dashboard/dashboard-routing';
import { LoginComponent } from './components/login/login.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: 'dashboardAdmin/:nombre/:role',
    component: DashboardComponent,
    children: DASHBOARD_ROUTES_ADMIN
  },
  {
    path: 'dashboardCoord/:nombre/:role',
    component: DashboardComponent,
    children: DASHBOARD_ROUTES_COORD
  },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
