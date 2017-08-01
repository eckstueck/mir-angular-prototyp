import { Component, OnInit, Input} from '@angular/core';

import { APIDocument } from '../../apiDocument';

@Component({
  selector: 'mir-sidebar',
  templateUrl: './app/meta/sidebar/sidebar.component.html',
  styleUrls: ['./app/meta/sidebar/sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() document: APIDocument;
  
  constructor() { }

  ngOnInit() {
  }

}
