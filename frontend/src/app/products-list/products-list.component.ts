import { Component, OnInit } from '@angular/core';
import { products } from './cupcakes-data';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsList implements OnInit {
  cupcakes: any;
  constructor() {
    this.cupcakes = products;
   }
  ngOnInit() {
  }

}
