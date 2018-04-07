import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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

    constructor(private userService: UserService,
        private route: ActivatedRoute,
        private router: Router) { }
    ngOnInit() {
    }
    
    registerUser() {
        this.userService.register(this.registerForm.value).subscribe(res=>console.log(res))
        this.registerForm.reset()
        this.toggleRegister();
    }

    loginUser() { 
        this.userService.login(this.loginForm.value)
        this.router.navigate(['/products']);
    }

    toggleRegister(){
        this.registerVisibility= !this.registerVisibility;
        this.registerForm.reset();
        this.loginForm.reset();
    }
}