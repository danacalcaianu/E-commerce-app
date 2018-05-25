import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/Rx';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProductsService } from './products.service'
import { products } from '../../../cupcakes-data.js';

@Injectable()
export class UserService {
    private _currentUserId: BehaviorSubject<any> = new BehaviorSubject({});
    private _currentCart: BehaviorSubject<any> = new BehaviorSubject({});
    private _currentUser: BehaviorSubject<any> = new BehaviorSubject({});

    constructor(private http: HttpClient,
        private toastr: ToastrService,
        private router: Router,
        private productsService: ProductsService) {
        this.loadInitialData();
    }

    loadInitialData() {
        const user = localStorage.getItem('currentUser');
        if (user) {
            this._currentUserId.next(JSON.parse(user));
        }
    }


    register(user) {
        return this.http.post('http://localhost:3030/users/registration', user);
    }

    login(user) {
        this.http.post('http://localhost:3030/users/login', user)
            .subscribe(
                res => {
                if (res['success'] === true) {
                    localStorage.setItem('currentUser', JSON.stringify(res['user']['id']));
                    this._currentUserId.next(res['user'].id);
                    this._currentUser.next(res.user)
                    this.toastr.success('Logged in!');
                }},
                error => {
                    this.toastr.error(JSON.stringify(error.statusText));
                },
                () => {
                    this.router.navigate(['/products']);
                });
    }

    getCurrentUserId() {
        return this._currentUserId.asObservable();
    }

    getCurrentUser(id) {
        this.http.get(`http://localhost:3030/user/${id}`).subscribe(user=>this._currentUser.next(user.payload));
        return this.http.get(`http://localhost:3030/user/${id}`);
    }

    getUserCart() {
       this._currentCart.next( this.getProducts( this._currentUser.getValue().cart));
       return this._currentCart.asObservable();
    }

    logout() {
        localStorage.removeItem('currentUser');
        this._currentUserId.next(undefined);
        this.toastr.success('Logged out!');
    }

    addToCart(product) {
        const user = this._currentUserId.getValue();
        this.http.put('http://localhost:3030/users/updateCart', {'id': user, 'product': product})
            .subscribe(result => { 
                console.log('before  ',this._currentCart.getValue())
                this._currentCart.next(this.getProducts(result.payload.cart));
                console.log('after: ', this._currentCart.getValue())
                this.toastr.success('Added to cart');
        });
    }

    getProduct(id) {
        return products.find(product => product.id === id);
    }

    getProducts(cart) {
        const cartProducts = cart.map(id => this.getProduct(id));
        this._currentCart.next(cartProducts);
        return cartProducts;
    }
}
