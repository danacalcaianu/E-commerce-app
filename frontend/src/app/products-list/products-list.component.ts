import { Component, OnInit } from '@angular/core';
import { products } from '../../../cupcakes-data';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsList implements OnInit {
  cupcakes: any;
  defaultImage: any;

  constructor(private userService: UserService) {
    this.cupcakes = products;
    this.defaultImage = 'https://cdn0.iconfinder.com/data/icons/sweets-glyph-black/2048/Cherry_cupcake-512.png';
  }

  ngOnInit() {
  }

  addToCart(product) {
    this.userService.addToCart(product);
  }

}
