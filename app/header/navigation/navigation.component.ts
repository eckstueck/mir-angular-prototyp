import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mir-navigation',
  templateUrl: '../app/header/navigation/navigation.component.html',
  styleUrls: ['../app/header/navigation/navigation.component.css']
})
export class NavigationComponent implements OnInit {
  searchInput: string = "*";

  constructor() { }

  ngOnInit() {
  }

}
