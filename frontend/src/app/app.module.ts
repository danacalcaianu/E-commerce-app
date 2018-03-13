import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { SliderComponent } from './slider/slider.component';
import { FooterComponent } from './footer/footer.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { MinicartComponent } from './minicart/minicart.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MenuBarComponent,
    SliderComponent,
    FooterComponent,
    SearchBarComponent,
    MinicartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
