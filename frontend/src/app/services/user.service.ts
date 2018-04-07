import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/Rx';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class UserService {
    private _currentUser: BehaviorSubject<any> = new BehaviorSubject({});
    constructor(private http: HttpClient, private toastr:ToastrService) {
        this.loadInitialData();
    }

    loadInitialData() {
        let user = localStorage.getItem("currentUser")
        if (user) {
            this._currentUser.next(JSON.parse(user).username);
        }
    }


    register(user) {
        return this.http.post('http://localhost:3030/users/registration', user);
    }

    login(user) {
        this.http.post('http://localhost:3030/users/login', user).subscribe(res => {
            if (res['success']) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(res['user']));
                this._currentUser.next(res['user'].username)
                this.toastr.success('Logged in!')
            }
        })
    }

    getCurrentUser() {
        return this._currentUser.asObservable();
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this._currentUser.next(undefined)
        this.toastr.success('Logged out!');
    }
}