import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
      styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    registerVisibility: any;

    loginForm = new FormGroup ({
        username: new FormControl(),
        password: new FormControl()
    });

    registerForm = new FormGroup({
        name: new FormControl(),
        username: new FormControl(),
        password: new FormControl()

    });

    constructor(private userService: UserService, private toastr: ToastrService) { }

    ngOnInit() {}

    registerUser() {
        this.userService.register(this.registerForm.value).subscribe(
            res => {
            if (res['success'] === true) {
                this.toastr.success('User registered successfully!');
                this.toggleRegister();
                this.registerForm.reset();
            }},
            error => {
                this.toastr.error(JSON.stringify(error.statusText));
            },
        );
    }

    loginUser() {
        this.userService.login(this.loginForm.value);
    }

    toggleRegister() {
        this.registerVisibility = !this.registerVisibility;
        this.registerForm.reset();
        this.loginForm.reset();
    }
}
