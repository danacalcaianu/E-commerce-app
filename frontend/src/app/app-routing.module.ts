import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsList } from './products-list/products-list.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'products', component: ProductsList },
    { path: 'contact', component: ContactPageComponent },
    { path: 'login', component: UsersComponent },
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
