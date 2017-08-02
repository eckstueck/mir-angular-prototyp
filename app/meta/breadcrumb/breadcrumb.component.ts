import { Component, OnInit, Input } from '@angular/core';

import { APIDocument } from '../../apiDocument';

@Component({
  selector: 'mir-breadcrumb',
  templateUrl: './app/meta/breadcrumb/breadcrumb.component.html',
  styleUrls: ['./app/meta/breadcrumb/breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {
  @Input() document: APIDocument;

  constructor() { }

  ngOnInit() {
  }

}

