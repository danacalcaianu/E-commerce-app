import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SliderComponent } from './slider/slider.component';
import { UsersComponent } from './users/users.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MinicartComponent } from './minicart/minicart.component';
import { ProductsList } from './products-list/products-list.component';
import { RouterModule, Routes } from '@angular/router';
import { Header } from './header/header.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { UserService } from './services/user.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'products', component: ProductsList },
  { path: 'contact', component: ContactPageComponent },
  { path: 'login', component: UsersComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MenuBarComponent,
    SliderComponent,
    FooterComponent,
    SearchBarComponent,
    MinicartComponent,
    ProductsList,
    Header,
    ContactPageComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
