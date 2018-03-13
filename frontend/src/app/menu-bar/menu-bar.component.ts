import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor() { }

  visible= false;
  ngOnInit() {
  }

  toggleMiniCart(){
    console.log("here")
    this.visible= !this.visible;
  }

}
