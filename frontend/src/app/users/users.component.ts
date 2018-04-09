import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
      styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    registerVisibility:any;

    loginForm = new FormGroup ({
        username: new FormControl(),
        password: new FormControl()
    });

    registerForm = new FormGroup({
        name: new FormControl(),
        username: new FormControl(),
        password: new FormControl()

    })

    constructor(private userService: UserService) { }

    ngOnInit() {}
    
    registerUser() {
        this.userService.register(this.registerForm.value)
        this.registerForm.reset()
        this.toggleRegister();
    }

    loginUser() { 
        this.userService.login(this.loginForm.value)
    }

    toggleRegister(){
        this.registerVisibility= !this.registerVisibility;
        this.registerForm.reset();
        this.loginForm.reset();
    }
}