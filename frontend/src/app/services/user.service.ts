import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/Rx';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable()
export class UserService {
    private _currentUser: BehaviorSubject<any> = new BehaviorSubject({});

    constructor(private http: HttpClient,
        private toastr: ToastrService,
        private router: Router) {
        this.loadInitialData();
    }

    loadInitialData() {
        const user = localStorage.getItem('currentUser');
        if (user) {
            this._currentUser.next(JSON.parse(user).username);
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
                    localStorage.setItem('currentUser', JSON.stringify(res['user']));
                    this._currentUser.next(res['user'].username);
                    this.toastr.success('Logged in!');
                }},
                error => {
                    this.toastr.error(JSON.stringify(error.statusText));
                },
                () => {
                    this.router.navigate(['/products']);
                });
    }

    getCurrentUser() {
        return this._currentUser.asObservable();
    }

    logout() {
        localStorage.removeItem('currentUser');
        this._currentUser.next(undefined);
        this.toastr.success('Logged out!');
    }
}