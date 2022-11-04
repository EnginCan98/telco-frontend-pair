import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router'; // CLI imports router

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CorporateNameFilterPipe } from './pipes/corporate-name-filter.pipe';
import { CreateFakeArrayPipe } from './pipes/create-fake-array.pipe';
import { CustomerComponent } from './pages/customer/customer.component';
import { CustomerDetailsComponent } from './pages/customer-details/customer-details.component';
import { FirstNameFilterPipe } from './pipes/first-name-filter.pipe';
// import { FilterPipe } from './pipes/filter.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { JwtModule } from "@auth0/angular-jwt";
import { LastNameFilterPipe } from './pipes/last-name-filter.pipe';
import { ListViewComponent } from './components/list-view/list-view.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { SplitPipe } from './pipes/split.pipe';
import { ToastrModule } from 'ngx-toastr';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { CorporateCustomerComponent } from './pages/corporate-customer/corporate-customer.component';
import { CorporateCustomerDetailsComponent } from './pages/corporate-customer-details/corporate-customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    CreateFakeArrayPipe,
    SplitPipe,
    LoginComponent,
    HomepageComponent,
    LoadingOverlayComponent,
    NavbarComponent,
    FooterComponent,
    CustomerComponent,
    FirstNameFilterPipe,
    LastNameFilterPipe,
    CorporateNameFilterPipe,
    CustomerDetailsComponent,
    CorporateCustomerComponent,
    CorporateCustomerDetailsComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//ekledik
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {return localStorage.getItem('token');}
      },
    })
  ],

  // Injectable classlarımı providers 'ta tanımlarım
  providers: [{provide: HTTP_INTERCEPTORS,useClass:LoadingInterceptor,multi:true},{provide: HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

