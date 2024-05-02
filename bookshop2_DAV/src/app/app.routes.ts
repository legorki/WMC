import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { userGuardGuard } from './user-guard.guard';
import { BooksComponent } from './admin/books/books.component';
import { adminGuard } from './admin.guard';
import { AuthorsComponent } from './admin/authors/authors.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ProductsComponent } from './user/products/products.component';
import { AccountComponent } from './user/account/account.component';
import { CartComponent } from './user/cart/cart.component';
import { CheckoutComponent } from './user/checkout/checkout.component';
import { AboutComponent } from './user/about/about.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: "register", component:RegisterComponent},
    {path: "admin/books", component: BooksComponent, canActivate: [adminGuard]},
    {path: "admin/authors", component: AuthorsComponent, canActivate: [adminGuard]},
    {path: "admin/orders", component: OrdersComponent, canActivate: [adminGuard]},
    {path: "shop/products", component: ProductsComponent, canActivate: [userGuardGuard]},
    {path: "shop/account", component: AccountComponent, canActivate: [userGuardGuard]},
    {path: "shop/cart", component: CartComponent, canActivate: [userGuardGuard]},
    {path: "shop/checkout", component: CheckoutComponent, canActivate: [userGuardGuard]},
    {path: "shop/about", component: AboutComponent, canActivate: [userGuardGuard]},
    {path: "**", redirectTo: '/login', pathMatch: "full"},
    {path: '', redirectTo: '/login', pathMatch: "full"},
];
