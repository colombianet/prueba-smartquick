import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { CategoriesComponent } from '../categories/categories.component';

import { MantenimientoComponent } from '../mantenimiento/mantenimiento.component';

export const DASHBOARD_ROUTES_ADMIN: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const DASHBOARD_ROUTES_COORD: Routes = [
    { path: 'mantenimiento', component: MantenimientoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'mantenimiento' }
];
