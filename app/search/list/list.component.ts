import { Component, OnInit, Input } from '@angular/core';

import { APIDocuments } from '../../apiDocuments';

@Component({
  selector: 'mir-list',
  templateUrl: './app/search/list/list.component.html',
  styleUrls: ['./app/search/list/list.component.css']
})
export class ListComponent implements OnInit {
  @Input() documents: APIDocuments;

  constructor() { }

  ngOnInit() {
  }

}
