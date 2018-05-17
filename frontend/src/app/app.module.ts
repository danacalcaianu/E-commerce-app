import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MinicartComponent } from './minicart/minicart.component';
import { ProductsList } from './products-list/products-list.component';
import { RouterModule, Routes } from '@angular/router';
import {Header } from './header/header.component';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path:'products', component:ProductsList },

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
    Header
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }