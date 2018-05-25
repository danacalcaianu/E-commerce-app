import { Injectable } from '@angular/core';
import { products } from '../../../cupcakes-data.js';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ProductsService {
  private _currentCart: BehaviorSubject<any> = new BehaviorSubject({});
  constructor() { }

  getProduct(id) {
    return products.find(product => product.id === id);
  }

  getProducts(cart) {
    const cartProducts = cart.map(id => this.getProduct(id));
    this._currentCart.next(cartProducts);
    return this._currentCart.asObservable();
  }
}
