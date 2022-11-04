import { RouterModule, Routes } from '@angular/router';

import { CorporateCustomerComponent } from './pages/corporate-customer/corporate-customer.component';
import { CorporateCustomerDetailsComponent } from './pages/corporate-customer-details/corporate-customer-details.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { CustomerDetailsComponent } from './pages/customer-details/customer-details.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginGuard } from './guards/login.guard';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'services', component: HomepageComponent, canActivate:[LoginGuard]},
  {path:'login', component: LoginComponent},
  {path:'individualCustomers', component: CustomerComponent, canActivate:[LoginGuard]},
  {path:'corporatecustomers', component: CorporateCustomerComponent, canActivate:[LoginGuard]},
  {path:'individualCustomers/:customerId', component:CustomerDetailsComponent, canActivate:[LoginGuard]},
  {path:'corporatecustomers/:customerId', component: CorporateCustomerDetailsComponent, canActivate:[LoginGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
