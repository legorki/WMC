import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: "full"},
    {path: 'login', component: LoginComponent},
    {path: "register", component:RegisterComponent},
    {path: "dashboard", component: DashboardComponent},
    {path: "**", redirectTo: '/login', pathMatch: "full"}
];
