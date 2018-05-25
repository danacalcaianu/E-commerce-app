import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private userService:  UserService, private productsService: ProductsService) { }
  selected;
  user;
  visible = false;
  logoutDiv = false;
  productsTotal;
  cart;

  ngOnInit() {
    this.userService.getCurrentUserId().subscribe(id => {
        this.userService.getCurrentUser(id).subscribe(user => {
          this.user = user['payload'];
          this.userService.getUserCart().subscribe(itemz => {
            this.productsTotal = itemz.reduce((total, item ) =>  parseInt(total, 10) + parseInt(item.price, 10), 0);
            return this.cart = itemz;
          });
        });
    });
  }

  ngOnChange() {
    this.userService.getCurrentUserId().subscribe(id => {
        this.userService.getCurrentUser(id).subscribe(user => this.user = user['payload']);
    });
  }

  toggleMiniCart() {
    this.visible = !this.visible;
  }

  logout() {
    this.userService.logout();
    this.user = undefined;
    this.logoutDiv = false;
  }

  toggleLogout() {
    this.logoutDiv = !this.logoutDiv;
  }
}
