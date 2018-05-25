import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../services/products.service'
import { UserService } from '../services/user.service'

@Component({
  selector: 'app-minicart',
  templateUrl: './minicart.component.html',
  styleUrls: ['./minicart.component.css']
})
export class MinicartComponent implements OnInit {

  @Input() cart;
  defaultImage: any;

  constructor(private productsService: ProductsService, private userService: UserService) { }

  ngOnInit() {
    this.defaultImage = 'https://cdn0.iconfinder.com/data/icons/sweets-glyph-black/2048/Cherry_cupcake-512.png';
    // this.userService.getUserCart().subscribe(item=>{console.log('here',this.cart=item));
  }
  ngOnChanges(changes){
    console.log('le cart', this.cart)
  }
}
