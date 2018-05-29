import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-minicart',
  templateUrl: './minicart.component.html',
  styleUrls: ['./minicart.component.css']
})
export class MinicartComponent implements OnInit {

  @Input() cart;
  defaultImage: any;

  constructor() { }

  ngOnInit() {
    this.defaultImage = 'https://cdn0.iconfinder.com/data/icons/sweets-glyph-black/2048/Cherry_cupcake-512.png';
  }
}
