import { Component, OnInit } from '@angular/core';
import { UserService }  from '../services/user.service'

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private userService:  UserService) { }
  selected;
  user;
  visible= false;
  logoutDiv = false;
  ngOnInit() {
    this.userService.getCurrentUser().subscribe(res=>{
      if(typeof res  == "string"){
        this.user=res
      }
    })
  }

  ngOnChange(){
    console.log("in change")
    this.userService.getCurrentUser().subscribe(res=>this.user=res);
  }

  toggleMiniCart(){
    this.visible= !this.visible;
  }

  logout()
  {
    this.userService.logout();
    this.user = undefined;
    this.logoutDiv= false;
  }

  toggleLogout(){
    this.logoutDiv = !this.logoutDiv;
  }

}
